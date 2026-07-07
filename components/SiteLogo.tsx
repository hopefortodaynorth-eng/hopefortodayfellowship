import Link from 'next/link';

export default function SiteLogo() {
  return (
    <Link
      href="/"
      className="site-logo shrink-0"
      aria-label="Hope For Today Fellowship Sutton home"
    >
      <img
        src="/HFTFNlogo.png"
        alt="Hope For Today Fellowship Sutton"
        className="h-12 md:h-14 w-auto"
      />
    </Link>
  );
}