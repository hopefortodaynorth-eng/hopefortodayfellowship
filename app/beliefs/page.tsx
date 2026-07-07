import PageIntro from '@/components/PageIntro';
import { beliefSections, preamble, scriptureReferences } from './beliefs-content';

function formatContent(text: string) {
  const parts = text.split(/(\[\d+(?:,\s*\d+)*\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+(?:,\s*\d+)*)\]$/);
    if (match) {
      const nums = match[1].split(/,\s*/);
      return (
        <sup key={i} className="text-primary-600 font-medium ml-0.5">
          {nums.join(',')}
        </sup>
      );
    }
    return part;
  });
}

export default function BeliefsPage() {
  const sortedRefs = Object.entries(scriptureReferences)
    .map(([n, ref]) => [Number(n), ref] as const)
    .sort((a, b) => a[0] - b[0]);

  return (
    <div>
      <PageIntro
        eyebrow="ROOTED IN THE GOSPEL"
        title="Beliefs of Hope For Today Fellowship Sutton"
        description="The full statement of faith that shapes everything we do at Hope For Today Fellowship Sutton."
      />

      <div className="max-w-4xl mx-auto px-6 pb-14">

      <div className="bg-primary-50 border border-primary-100 rounded-2xl px-8 py-8 mb-10">
        <h2 className="text-xl font-semibold text-neutral-800 mb-3">Preamble</h2>
        <p className="text-neutral-700 leading-relaxed">{preamble}</p>
      </div>

      <div className="space-y-6">
        {beliefSections.map((section) => (
          <article
            key={section.id}
            className="bg-white border border-neutral-100 rounded-xl px-8 py-7"
          >
            <h2 className="font-semibold text-xl text-neutral-800 mb-4">
              {section.id}. {section.title}
            </h2>

            {section.content && (
              <p className="text-neutral-600 leading-relaxed">{formatContent(section.content)}</p>
            )}

            {section.subsections && (
              <div className={section.content ? 'mt-5 space-y-5' : 'space-y-5'}>
                {section.subsections.map((sub, subIndex) => (
                  <div key={sub.title}>
                    <h3 className="font-medium text-neutral-800 mb-2">
                      {section.id}{String.fromCharCode(65 + subIndex)}/ {sub.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{formatContent(sub.content)}</p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 bg-white border border-neutral-100 rounded-2xl px-8 py-8">
        <h2 className="text-xl font-semibold text-neutral-800 mb-6">References</h2>
        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-neutral-600">
          {sortedRefs.map(([num, ref]) => (
            <div key={num} className="flex gap-2">
              <dt className="font-medium text-primary-600 shrink-0 w-6">{num}</dt>
              <dd>{ref}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-10 bg-primary-50 border border-primary-100 rounded-2xl px-8 py-8 text-center">
        <p className="text-neutral-700 max-w-md mx-auto">
          We hold firmly to these historic Christian beliefs while extending grace and love to all people.
        </p>
        <a
          href="/sermons"
          className="inline-block mt-5 text-sm font-medium text-primary-700 hover:text-primary-800"
        >
          Explore our latest messages →
        </a>
      </div>
      </div>
    </div>
  );
}