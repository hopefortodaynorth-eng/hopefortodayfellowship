'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const TARGET_ID = 'join-our-church-family';

export default function ConnectJoinScroll() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const shouldScroll =
      searchParams.get('join') === '1' ||
      window.location.hash === `#${TARGET_ID}`;

    if (!shouldScroll) return;

    const scrollToSignup = () => {
      document.getElementById(TARGET_ID)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    const timeout = window.setTimeout(scrollToSignup, 200);
    return () => window.clearTimeout(timeout);
  }, [searchParams]);

  return null;
}