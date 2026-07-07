import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  highlight?: boolean;
}

export default function EventCard({ title, date, time, location, description, highlight }: EventCardProps) {
  return (
    <div className={`event-card flex flex-col ${highlight ? 'border-primary-300 ring-1 ring-primary-100' : ''}`}>
      <div className={`px-7 pt-7 pb-5 ${highlight ? 'bg-primary-50' : ''}`}>
        <div className="text-xs font-medium tracking-widest text-primary-600 mb-1.5">{date}</div>
        <h4 className="font-semibold text-xl leading-tight tracking-tight mb-1">{title}</h4>
        <div className="text-sm text-neutral-600">{time} • {location}</div>
      </div>
      <div className="px-7 pb-7 text-sm text-neutral-600 flex-1">
        {description}
      </div>
    </div>
  );
}
