import { NextResponse } from 'next/server';
import { addOrUpdateSubscriber } from '@/lib/email-directory';
import type { ConnectSignupPayload } from '@/lib/types/subscriber';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConnectSignupPayload;

    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(body.email.trim())) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const subscriber = await addOrUpdateSubscriber({
      name: body.name,
      email: body.email,
      phone: body.phone,
      interests: Array.isArray(body.interests) ? body.interests : [],
      message: body.message,
    });

    return NextResponse.json({ ok: true, id: subscriber.id });
  } catch (error) {
    console.error('Connect signup failed:', error);
    return NextResponse.json({ error: 'Unable to save your signup right now.' }, { status: 500 });
  }
}