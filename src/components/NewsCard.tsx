import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
}

function NewsCard({ item }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:bg-white/15">
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-3">{item.headline}</h2>
        <div
          className={`overflow-hidden text-white/80 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="mb-4">{item.content}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 mt-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-white/90 transition-all duration-200"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span>Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span>More</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
