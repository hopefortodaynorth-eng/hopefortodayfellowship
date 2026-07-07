import Link from 'next/link';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-site-nav text-neutral-200 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-10">
          {/* Branding */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src="/HFTFNlogo.png" alt="" className="h-9 w-auto" />
              <span className="font-semibold tracking-tight text-xl text-white">
                Hope For Today Fellowship Sutton
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed text-sm">
              A sister church to Hope For Today Fellowship in Keswick, ON.
              Proclaiming the hope of the Cross and the Empty Tomb in the Sutton community.
            </p>
            <div className="flex gap-5 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-link">
                <FaFacebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-link">
                <FaYoutube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-link">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[2px] text-neutral-400 mb-3">EXPLORE</div>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block footer-link">About Us</Link>
              <Link href="/leadership" className="block footer-link">Leadership</Link>
              <Link href="/beliefs" className="block footer-link">What We Believe</Link>
              <Link href="/sermons" className="block footer-link">Sermons</Link>
              <Link href="/ministries" className="block footer-link">Ministries</Link>
              <Link href="/events" className="block footer-link">Events</Link>
              <Link href="/give" className="block footer-link">Give</Link>
            </div>
          </div>

          {/* Service & Contact */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8">
              <div>
                <div className="text-xs uppercase tracking-[2px] text-neutral-400 mb-3">SUNDAYS</div>
                <div className="text-lg font-medium text-white">5:00 PM</div>
                <div className="text-sm mt-1">34 Market St<br />Sutton, ON L0E 1R0</div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[2px] text-neutral-400 mb-3">CONTACT</div>
                <a href="mailto:info@hopefortodaynorth.ca" className="block text-sm footer-link">info@hopefortodaynorth.ca</a>
                <a href="tel:9055550123" className="block text-sm footer-link mt-1">(905) 555-0123</a>
                
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[2px] text-neutral-400 mb-1">OFFICE HOURS</div>
                  <div className="text-sm text-neutral-300">Sundays • 3:00 PM – 7:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-y-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Hope For Today Fellowship Sutton. All rights reserved. A sister church of Hope For Today Fellowship, Keswick.
          </div>
          <div className="flex gap-x-6">
            <Link href="/connect" className="hover:text-white transition-colors">Connect</Link>
            <a href="https://mailchi.mp/" target="_blank" className="hover:text-white transition-colors">Prayer Team</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
