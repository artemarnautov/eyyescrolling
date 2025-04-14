import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center px-4 py-2">
      <input
        type="text"
        placeholder="Search news..."
        className="w-full max-w-2xl px-4 py-2 rounded-2xl bg-neutral-900 text-white placeholder-gray-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#1DB954]"
      />
    </div>
  );
};

export default SearchBar;

