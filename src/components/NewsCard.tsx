import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
}

function NewsCard({ item }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/8 group">
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white mb-4">{item.headline}</h2>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <p className="text-gray-300 mb-4">{item.content}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-all duration-300"
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