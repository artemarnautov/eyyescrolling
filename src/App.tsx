import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import NewsCard from './components/NewsCard';
import { NewsItem } from './types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    headline: 'SpaceX Successfully Launches New Satellite Constellation',
    content: 'In a groundbreaking mission, SpaceX has successfully deployed its latest constellation of satellites, marking a significant milestone in global internet coverage. The launch, which took place early this morning, saw the deployment of 60 new satellites, bringing the total number in orbit to over 1,500.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1200',
    headline: 'Revolutionary AI System Helps Predict Climate Changes',
    content: 'Scientists have developed a new artificial intelligence system capable of predicting climate changes with unprecedented accuracy. The system, which analyzes decades of environmental data, can forecast weather patterns and climate trends up to five years in advance.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    headline: 'Global Tech Summit Announces Revolutionary Innovation',
    content: 'The annual Global Tech Summit has unveiled several groundbreaking innovations that promise to reshape the technology landscape. Among the most notable announcements was a new quantum computing breakthrough that could revolutionize data processing capabilities.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          EYYE
        </h1>
        <div className="space-y-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
