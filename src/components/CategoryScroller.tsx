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

const CategoryScroller = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-4">
      <div className="flex gap-3 px-2 min-w-max">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-[#050f0c]/90 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/10 whitespace-nowrap hover:bg-[#143426]/80 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryScroller;


