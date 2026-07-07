import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

export default function GivePage() {
  return (
    <div>
      <PageIntro
        eyebrow="GENEROSITY"
        title="Give"
        description="Thank you for considering a gift to Hope For Today Fellowship Sutton. Your generosity helps us reach our community with the hope of Jesus and support the work God is doing here."
      />

      <div className="max-w-3xl mx-auto px-6 pb-14 text-center">
        <div className="mt-2 bg-white border rounded-2xl p-10 text-left max-w-md mx-auto">
          <h4 className="font-semibold mb-2">Ways to Give</h4>
          <ul className="space-y-4 text-sm text-neutral-700 mt-5">
            <li><strong>Online:</strong> Coming soon — secure online giving will be available shortly.</li>
            <li><strong>In Person:</strong> Offering boxes are available at our Sunday gatherings.</li>
            <li><strong>E-Transfer:</strong> Send to <a href="mailto:give@hopefortodaynorth.ca" className="text-primary-600">give@hopefortodaynorth.ca</a></li>
          </ul>

          <div className="mt-7 text-xs text-neutral-500">
            Hope For Today Fellowship Sutton is a registered Canadian charity. Tax receipts will be issued for donations over $20.
          </div>
        </div>

        <p className="mt-8 text-sm text-neutral-600">
          Questions about giving? <Link href="/connect" className="text-primary-600 hover:underline">Contact our team</Link>
        </p>
      </div>
    </div>
  );
}