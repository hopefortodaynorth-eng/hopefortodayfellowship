'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 300);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center border border-neutral-100 shadow-sm">
        <h3 className="text-2xl tracking-tight font-semibold mb-2">Thank you!</h3>
        <p className="text-neutral-600">We received your message and will get back to you within a couple of days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="form-label" htmlFor="cname">Name</label>
          <input type="text" id="cname" name="name" required className="form-input" />
        </div>
        <div>
          <label className="form-label" htmlFor="cemail">Email</label>
          <input type="email" id="cemail" name="email" required className="form-input" />
        </div>
      </div>

      <div className="mt-5">
        <label className="form-label" htmlFor="cphone">Phone</label>
        <input type="tel" id="cphone" name="phone" className="form-input" />
      </div>

      <div className="mt-5">
        <label className="form-label" htmlFor="cmessage">How can we help?</label>
        <textarea
          id="cmessage"
          name="message"
          rows={5}
          required
          className="form-input"
          placeholder="I'd like to learn more about the church, plan a visit, or ask about..."
        />
      </div>

      <div className="mt-6 flex flex-col items-center">
        <button type="submit" className="btn-primary px-12">Send Message</button>
        <p className="text-xs mt-3 text-neutral-500 text-center">We typically respond within 1–2 business days.</p>
      </div>
    </form>
  );
}