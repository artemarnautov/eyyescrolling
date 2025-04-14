import React from 'react';
import NewsCard from './components/NewsCard';
import CategoryScroller from './components/CategoryScroller';
import { NewsItem } from './types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    headline: 'SpaceX Successfully Launches New Satellite Constellation',
    content:
      'In a groundbreaking mission, SpaceX has successfully deployed its latest constellation of satellites, marking a significant milestone in global internet coverage. The launch...',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1526526526350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1200',
    headline: 'Revolutionary AI System Helps Predict Climate Changes',
    content:
      'Scientists have developed a new artificial intelligence system capable of predicting climate changes with unprecedented accuracy. The system, which analyzes decades of environmental data...',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-14864606146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    headline: 'Global Tech Summit Announces Revolutionary Innovation',
    content:
      'The annual Global Tech Summit has unveiled several groundbreaking innovations that promise to reshape the technology landscape. Among the most notable announcements was a new...',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-tight">
          EYYE
        </h1>

        <CategoryScroller />

        <div className="flex flex-col gap-8 mt-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
  );
}

export default App;


