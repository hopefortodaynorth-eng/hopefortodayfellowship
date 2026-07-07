'use client';

import React, { useState } from 'react';

export default function ConnectForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-10 rounded-2xl text-center shadow-sm border border-neutral-100">
        <h3 className="text-2xl font-semibold mb-2">Thank you for connecting!</h3>
        <p className="text-neutral-600 max-w-xs mx-auto">
          We&apos;ll be in touch soon. Welcome to the Hope For Today Fellowship Sutton family.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border p-8 md:p-10 shadow-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="form-label" htmlFor="connect-name">Full Name</label>
          <input 
            type="text" id="connect-name" name="name" required
            value={formData.name} onChange={handleChange}
            className="form-input" placeholder="Jane Smith" 
          />
        </div>
        <div>
          <label className="form-label" htmlFor="connect-email">Email Address</label>
          <input 
            type="email" id="connect-email" name="email" required
            value={formData.email} onChange={handleChange}
            className="form-input" placeholder="you@email.com" 
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="form-label" htmlFor="connect-phone">Phone Number (optional)</label>
        <input 
          type="tel" id="connect-phone" name="phone"
          value={formData.phone} onChange={handleChange}
          className="form-input" placeholder="(905) 555-1234" 
        />
      </div>

      <div className="mt-6">
        <label className="form-label">I&apos;m interested in (select all that apply):</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm mt-1.5">
          {[
            'Sunday Service Updates',
            'Sunday Worship',
            'Prayer Requests & Team',
            'Community Groups',
            'Serving / Volunteering',
            'Children\'s Ministry',
            'Men\'s Ministry',
            'Women\'s Ministry',
            'Outreach',
            'Baptism',
            'Just visiting & want to know more',
          ].map((interest, i) => (
            <label key={i} className="flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={formData.interests.includes(interest)}
                onChange={() => handleCheckbox(interest)}
                className="w-4 h-4 accent-primary-500" 
              />
              {interest}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="form-label" htmlFor="connect-message">Anything else you&apos;d like us to know?</label>
        <textarea 
          id="connect-message" name="message" rows={3}
          value={formData.message} onChange={handleChange}
          className="form-input resize-y" 
          placeholder="I have young kids... or I&apos;m new to faith..."
        />
      </div>

      <div className="mt-7 flex flex-col items-center">
        <button type="submit" className="btn-accent px-14">
          Join E-Connect
        </button>
        <p className="text-xs text-neutral-500 mt-3 text-center">Your information is kept confidential and used only for church communication.</p>
      </div>
    </form>
  );
}
