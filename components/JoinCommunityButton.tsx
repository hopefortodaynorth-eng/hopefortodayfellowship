'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const TARGET_PATH = '/connect';
const TARGET_URL = '/connect?join=1';
const TARGET_ID = 'join-our-church-family';

export default function JoinCommunityButton() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || pathname !== TARGET_PATH) {
      setHidden(false);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('join') === '1') {
      setHidden(true);
      return;
    }

    const target = document.getElementById(TARGET_ID);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '-5rem 0px -10% 0px' }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [ready, pathname]);

  if (!ready || hidden) {
    return null;
  }

  return (
    <Link
      href={TARGET_URL}
      scroll={false}
      className="join-community-btn"
      aria-label="Join our church family — sign up for E-Connect"
    >
      Join Our Church Family
    </Link>
  );
}