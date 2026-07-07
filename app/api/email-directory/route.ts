import { NextResponse } from 'next/server';
import {
  isAuthorizedDirectoryRequest,
  listSubscribers,
  subscribersToCsv,
} from '@/lib/email-directory';

export async function GET(request: Request) {
  if (!isAuthorizedDirectoryRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const subscribers = await listSubscribers();
  const format = new URL(request.url).searchParams.get('format');

  if (format === 'csv') {
    return new NextResponse(subscribersToCsv(subscribers), {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="hope-for-today-north-subscribers.csv"',
      },
    });
  }

  return NextResponse.json({ count: subscribers.length, subscribers });
}