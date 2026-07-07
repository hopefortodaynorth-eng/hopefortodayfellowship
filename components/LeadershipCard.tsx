import type { Leader } from '@/app/leadership/leadership-content';

type LeadershipCardProps = {
  leader: Leader;
};

export default function LeadershipCard({ leader }: LeadershipCardProps) {
  return (
    <article className="grid md:grid-cols-5 gap-8 items-start bg-white border border-neutral-100 rounded-2xl p-8 md:p-10 shadow-sm">
      <div className="md:col-span-2">
        <div className="aspect-[4/3] w-full bg-neutral-100 rounded-xl overflow-hidden">
          {leader.image ? (
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-400 px-6 text-center text-sm">
              Photo coming soon
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-3 text-neutral-800">
        <div className="page-eyebrow mb-2">{leader.role}</div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-5">
          {leader.name}
        </h2>

        <div className="space-y-4 leading-relaxed">
          {leader.bio.map((paragraph, index) => (
            <p key={index} className={paragraph.startsWith('Share your story') ? 'text-neutral-600 italic' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}