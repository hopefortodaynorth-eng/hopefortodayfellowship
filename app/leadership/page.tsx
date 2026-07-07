import PageIntro from '@/components/PageIntro';
import LeadershipCard from '@/components/LeadershipCard';
import { pastor, elders } from './leadership-content';

export default function LeadershipPage() {
  return (
    <div>
      <PageIntro
        eyebrow="OUR LEADERSHIP"
        title="Leadership"
        description="Meet the pastor and elders who serve and shepherd Hope For Today Fellowship Sutton."
      />

      <div className="max-w-5xl mx-auto px-6 pb-16 space-y-12">
        <section>
          <div className="text-center mb-8">
            <div className="page-eyebrow">PASTOR</div>
            <h2 className="section-title mt-2">Shepherding Our Church</h2>
          </div>
          <LeadershipCard leader={pastor} />
        </section>

        <section>
          <div className="text-center mb-8">
            <div className="page-eyebrow">ELDERS</div>
            <h2 className="section-title mt-2">Serving Alongside Our Pastor</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Our elders walk with the congregation in prayer, counsel, and care — helping guide our church family as we follow Jesus together.
            </p>
          </div>

          <div className="space-y-8">
            {elders.map((elder) => (
              <LeadershipCard key={elder.name} leader={elder} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}