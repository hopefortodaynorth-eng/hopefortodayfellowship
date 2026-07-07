import { promises as fs } from 'fs';
import path from 'path';
import type { ConnectSignupPayload, Subscriber } from '@/lib/types/subscriber';

const DIRECTORY_PATH = path.join(process.cwd(), 'email-directory');
const SUBSCRIBERS_FILE = path.join(DIRECTORY_PATH, 'subscribers.json');

async function ensureDirectory() {
  await fs.mkdir(DIRECTORY_PATH, { recursive: true });
}

async function readSubscribersFile(): Promise<Subscriber[]> {
  try {
    const raw = await fs.readFile(SUBSCRIBERS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeSubscribersFile(subscribers: Subscriber[]) {
  await ensureDirectory();
  await fs.writeFile(SUBSCRIBERS_FILE, `${JSON.stringify(subscribers, null, 2)}\n`, 'utf8');
}

export async function listSubscribers(): Promise<Subscriber[]> {
  const subscribers = await readSubscribersFile();
  return subscribers.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export async function addOrUpdateSubscriber(payload: ConnectSignupPayload): Promise<Subscriber> {
  const email = payload.email.trim().toLowerCase();
  const now = new Date().toISOString();
  const subscribers = await readSubscribersFile();
  const existingIndex = subscribers.findIndex((entry) => entry.email === email);

  const entry: Subscriber = {
    id: existingIndex >= 0 ? subscribers[existingIndex].id : crypto.randomUUID(),
    name: payload.name.trim(),
    email,
    phone: payload.phone?.trim() ?? '',
    interests: payload.interests ?? [],
    message: payload.message?.trim() ?? '',
    subscribedAt: existingIndex >= 0 ? subscribers[existingIndex].subscribedAt : now,
    updatedAt: now,
  };

  if (existingIndex >= 0) {
    subscribers[existingIndex] = entry;
  } else {
    subscribers.push(entry);
  }

  await writeSubscribersFile(subscribers);
  return entry;
}

export function subscribersToCsv(subscribers: Subscriber[]): string {
  const headers = ['name', 'email', 'phone', 'interests', 'message', 'subscribedAt', 'updatedAt'];
  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const rows = subscribers.map((subscriber) =>
    [
      subscriber.name,
      subscriber.email,
      subscriber.phone,
      subscriber.interests.join('; '),
      subscriber.message,
      subscriber.subscribedAt,
      subscriber.updatedAt,
    ]
      .map(escape)
      .join(',')
  );

  return `${headers.join(',')}\n${rows.join('\n')}\n`;
}

export function isAuthorizedDirectoryRequest(request: Request): boolean {
  const secret = process.env.EMAIL_DIRECTORY_SECRET;
  if (!secret) return false;

  const authHeader = request.headers.get('authorization');
  const bearer = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  const queryKey = new URL(request.url).searchParams.get('key');

  return bearer === secret || queryKey === secret;
}