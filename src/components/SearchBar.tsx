import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center px-4 py-2">
      <input
        type="text"
        placeholder="Search news..."
        className="w-full max-w-2xl px-4 py-2 rounded-full bg-[#050f0c]/90 backdrop-blur-md border border-[#53BDEB] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#53BDEB] transition"
      />
    </div>
  );
};

export default SearchBar;



