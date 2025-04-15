import React from 'react';
import NewsCard from './components/NewsCard';
import CategoryScroller from './components/CategoryScroller';
import SearchBar from './components/SearchBar';
import { NewsItem } from './types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    headline: 'SpaceX Successfully Launches New Satellite Constellation',
    content:
      'In a groundbreaking mission, SpaceX has successfully deployed its latest constellation of satellites, marking a significant milestone in global internet coverage.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline: 'Revolutionary AI System Helps Predict Climate Changes',
    content:
      'Scientists have developed a new artificial intelligence system capable of predicting climate changes with unprecedented accuracy.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline: 'Global Tech Summit Announces Revolutionary Innovation',
    content:
      'The annual Global Tech Summit has unveiled several groundbreaking innovations that promise to reshape the technology landscape.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="w-full sm:max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-tight">
          <div className="flex justify-center mb-6">
  <img
    src="/IMG_1425.PNG"
    alt="EYYE"
    className="h-20 md:h-28 object-contain"
  />
</div>

        </h1>
         <div className="mb-6">
          <SearchBar />
        </div>
        <CategoryScroller />
        <div className="flex flex-col gap-8 mt-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;



