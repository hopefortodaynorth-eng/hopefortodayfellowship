import EventCard from '@/components/EventCard';
import PageIntro from '@/components/PageIntro';
import Link from 'next/link';

export default function EventsPage() {
  const events = [
    {
      title: "Opening Ceremony",
      date: "SUNDAY, SEPTEMBER 13, 2026",
      time: "5:00 PM",
      location: "34 Market St, Sutton",
      description: "Join us for our opening ceremony. Service begins at 5:00 PM, followed by a free BBQ and fellowship meet and greet. Everyone is warmly welcome.",
      highlight: true,
    },
    {
      title: "Sunday Gathering",
      date: "EVERY SUNDAY",
      time: "5:00 PM",
      location: "34 Market St, Sutton",
      description: "Worship, teaching from Scripture, prayer, and community. Children's ministry available during the service.",
    },
  ];

  return (
    <div>
      <PageIntro
        eyebrow="CALENDAR"
        title="Events & Gatherings"
        description="We would love to have you join us. Here's what's happening at Hope For Today Fellowship Sutton."
      />

      <div className="max-w-5xl mx-auto px-6 pb-14">

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            description={event.description}
            highlight={event.highlight}
          />
        ))}
      </div>

      <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-9 text-center flex flex-col items-center gap-6">
        <div>
          <div className="font-semibold text-xl">Want to stay up to date?</div>
          <p className="text-neutral-600 mt-1">Subscribe to our E-Connect newsletter for reminders and special updates.</p>
        </div>
        <Link href="/connect" className="btn-primary">Sign Up for Updates</Link>
      </div>
      </div>
    </div>
  );
}
