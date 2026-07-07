import React from 'react';

interface SermonCardProps {
  title: string;
  speaker: string;
  date: string;
  scripture: string;
  description?: string;
  videoUrl?: string;
}

export default function SermonCard({ title, speaker, date, scripture, description, videoUrl }: SermonCardProps) {
  return (
    <div className="sermon-card flex flex-col">
      <div className="h-2 bg-gradient-to-r from-primary-700 to-primary-400" />
      <div className="p-7 flex-1 flex flex-col">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{date}</div>
        
        <h3 className="font-semibold text-[21px] leading-tight tracking-tight mb-3 pr-2">{title}</h3>
        
        <div className="text-sm text-neutral-600 mb-1">{speaker}</div>
        <div className="text-xs text-primary-600 mb-4 font-medium">{scripture}</div>

        {description && (
          <p className="text-sm text-neutral-600 mb-6 flex-1">{description}</p>
        )}

        <div className="mt-auto">
          {videoUrl ? (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex text-sm font-medium items-center text-primary-600 hover:text-primary-700"
            >
              WATCH MESSAGE →
            </a>
          ) : (
            <span className="inline-block text-sm font-medium text-neutral-400">Coming soon</span>
          )}
        </div>
      </div>
    </div>
  );
}
