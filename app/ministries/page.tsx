import Link from 'next/link';
import PageIntro from '@/components/PageIntro';

const ministries = [
  {
    title: "Sunday Worship",
    desc: "Our weekly gathering is the heartbeat of our church. Expect Christ-centered worship, expository teaching, prayer, and warm community.",
    time: "Sundays • 5:00 PM",
  },
  {
    title: "Children's Ministry",
    desc: "A safe, fun, and gospel-centered environment for children (birth to Grade 5) during the Sunday service. We want kids to know and love Jesus.",
    time: "During Sunday Gathering",
  },
  {
    title: "Community Groups",
    desc: "Small groups that meet weekly in homes across Sutton and the surrounding area. Study the Bible, pray, and build real friendships.",
    time: "Various nights",
  },
  {
    title: "Prayer Ministry",
    desc: "We believe prayer moves the heart of God. Join us for weekly prayer gatherings and our dedicated prayer team.",
    time: "Wednesdays • 7:00 PM",
  },
  {
    title: "Men’s Ministry",
    desc: "Men gathering to grow in faith, accountability, and friendship. Regular Bible studies and occasional retreats.",
    time: "Monthly + weekly groups",
  },
  {
    title: "Women’s Ministry",
    desc: "Women supporting one another through Bible study, prayer, and life together. A place to be encouraged and equipped.",
    time: "Bi-weekly",
  },
  {
    title: "Outreach",
    desc: "Serving our community through practical acts of love, local partnerships, and coming alongside people in need.",
    time: "Ongoing",
  },
  {
    title: "Worship Team",
    desc: "Musicians and vocalists helping lead our church in authentic, Christ-exalting worship. Rehearsals and training provided.",
    time: "Rehearsals: Saturdays",
  },
];

export default function MinistriesPage() {
  return (
    <div>
      <PageIntro
        eyebrow="SERVE WITH US"
        title="Ministries & Get Involved"
        description="There is a place for you at Hope For Today Fellowship Sutton. Whether you're new to faith or have been walking with Jesus for years, we invite you to serve, grow, and belong."
      />

      <div className="max-w-6xl mx-auto px-6 pb-14">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministries.map((ministry, idx) => (
          <div key={idx} className="ministry-card p-8 flex flex-col">
            <h3 className="font-semibold text-2xl mb-3 tracking-tight">{ministry.title}</h3>
            <p className="text-neutral-600 flex-1 mb-6 leading-relaxed">{ministry.desc}</p>
            
            <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2.5">{ministry.time}</div>
            
            <Link 
              href="/connect" 
              className="text-sm font-medium text-primary-600 hover:text-primary-700 inline-flex items-center"
            >
              I&apos;m interested →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-site-nav text-white rounded-2xl px-9 py-10 text-center">
        <h3 className="font-medium text-xl">Ready to serve or join a group?</h3>
        <p className="text-neutral-300 mt-2 mb-6 max-w-md mx-auto">Let us know how you&apos;d like to get involved and we&apos;ll connect you personally.</p>
        <Link href="/connect" className="btn-accent">Fill out the Connect Form</Link>
      </div>
      </div>
    </div>
  );
}
