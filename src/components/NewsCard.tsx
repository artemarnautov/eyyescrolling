import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
}

function NewsCard({ item }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#0f1f17]/70 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300">
      <div className="aspect-square overflow-hidden">
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
          className="flex items-center gap-2 px-4 py-2 mt-2 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-sm text-black font-semibold transition-all duration-200"
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


