import React from 'react';
import NewsCard from './components/NewsCard';
import { NewsItem } from './types';
import CategoryScroller from './components/CategoryScroller';

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    headline: 'SpaceX Successfully Launches New Satellite Constellation',
    content:
      'In a groundbreaking mission, SpaceX has successfully deployed its latest constellation of satellites, marking a significant milestone in global internet coverage. The launch, which took place early this morning, saw the deployment of 60 new satellites, bringing the total number in orbit to over 1,500.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1200',
    headline: 'Revolutionary AI System Helps Predict Climate Changes',
    content:
      'Scientists have developed a new artificial intelligence system capable of predicting climate changes with unprecedented accuracy. The system, which analyzes decades of environmental data, can forecast weather patterns and climate trends up to five years in advance.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    headline: 'Global Tech Summit Announces Revolutionary Innovation',
    content:
      'The annual Global Tech Summit has unveiled several groundbreaking innovations that promise to reshape the technology landscape. Among the most notable announcements was a new quantum computing breakthrough that could revolutionize data processing capabilities.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-tight">
  EYYE
</h1>

<CategoryScroller />

<div className="flex flex-col gap-8 max-w-2xl mx-auto mt-6">
  {newsItems.map((item) => (
    <NewsCard key={item.id} item={item} />
  ))}
</div>

      </div>
    </div>
  );
}

export default App;

