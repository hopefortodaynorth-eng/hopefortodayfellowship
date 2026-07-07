'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import SiteLogo from '@/components/SiteLogo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/beliefs', label: 'What We Believe' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/ministries', label: 'Ministries' },
  { href: '/events', label: 'Events' },
  { href: '/connect', label: 'Connect' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#2f343d] shadow-md">
      <div className="flex items-center h-20 w-full">
        <div className="shrink-0 pl-3 sm:pl-4">
          <SiteLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-x-1 text-sm px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/give" className="nav-btn">
              Give
            </Link>
          </div>

          {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto shrink-0 pr-3 sm:pr-4 p-2 text-neutral-200 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#2f343d]">
          <div className="px-6 py-6 flex flex-col items-center gap-y-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-wrap justify-center gap-3 w-full">
              <Link
                href="/give"
                className="nav-btn"
                onClick={() => setIsOpen(false)}
              >
                Give
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}