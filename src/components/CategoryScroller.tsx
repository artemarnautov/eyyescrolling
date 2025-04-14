import React from 'react';

const categories = [
  'Breaking News',
  'Business',
  'Politics',
  'Influencers',
  'Education',
  'Show Business',
  'Technologies',
  'Society',
];

const CategoryScroller: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-4">
      <div className="flex gap-4 min-w-max px-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="whitespace-nowrap rounded-full px-6 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20 shadow-md hover:bg-white/20 transition-colors duration-200 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroller;
