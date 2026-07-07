import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { isAuthorizedDirectoryRequest, listSubscribers } from '@/lib/email-directory';

type BroadcastPayload = {
  subject?: string;
  text?: string;
  html?: string;
};

function getMailer() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  if (!isAuthorizedDirectoryRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const transporter = getMailer();
  if (!transporter) {
    return NextResponse.json(
      { error: 'Email sending is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.' },
      { status: 503 }
    );
  }

  const body = (await request.json()) as BroadcastPayload;
  const subject = body.subject?.trim();
  const text = body.text?.trim();
  const html = body.html?.trim();

  if (!subject || (!text && !html)) {
    return NextResponse.json(
      { error: 'Provide a subject and either text or html content.' },
      { status: 400 }
    );
  }

  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const subscribers = await listSubscribers();

  if (subscribers.length === 0) {
    return NextResponse.json({ error: 'No subscribers in the email directory yet.' }, { status: 400 });
  }

  const results = await Promise.allSettled(
    subscribers.map((subscriber) =>
      transporter.sendMail({
        from,
        to: subscriber.email,
        subject,
        text,
        html,
      })
    )
  );

  const sent = results.filter((result) => result.status === 'fulfilled').length;
  const failed = results.length - sent;

  return NextResponse.json({
    ok: failed === 0,
    sent,
    failed,
    total: subscribers.length,
  });
}