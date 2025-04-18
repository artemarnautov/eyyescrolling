import React from 'react';
import NewsCard from './components/NewsCard';
import CategoryScroller from './components/CategoryScroller';
import SearchBar from './components/SearchBar';
import { NewsItem } from './types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    headline: 'Did Elon Musk Share a Fake News Story About UK Detainment Camps?',
    content:
      'In August 2024, Elon Musk posted an image on X (formerly Twitter) that appeared to show a headline from The Telegraph. The headline claimed that UK Prime Minister Keir Starmer was planning to build "emergency detainment camps" on the Falkland Islands to house far-right rioters. Musk caption was brief but provocative: “Detainment camps…”

The post went viral, gaining nearly two million views in under an hour. Soon after, it was deleted without comment. However, the damage had already been done—dozens of influencers and accounts had already reshared the image, fueling speculation and outrage.

The Guardian later conducted an investigation into the origin of the article. Journalists traced the fake image back to Ashlea Simon, co-leader of the far-right group Britain First. According to their findings, the article had never appeared in The Telegraph and was entirely fabricated.

A spokesperson for The Telegraph confirmed the article was fake and that they had taken steps to report the false use of their branding. Meanwhile, critics accused Musk of amplifying extremist disinformation. Others defended him, arguing that he was merely raising a question and deleted the post quickly once doubts arose.

The UK government declined to comment directly on the tweet but reiterated its commitment to “addressing public disorder through lawful, democratic means.”

Musk did not issue a formal apology or clarification but continued to post critically about law enforcement and government responses to riots in the UK.

This incident reignited debate around Musk’s role as a platform owner and global influencer—and whether sharing unverified claims, even briefly, can contribute to the spread of misinformation.',
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



