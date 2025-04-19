import React from 'react';
import NewsCard from './components/NewsCard';
import CategoryScroller from './components/CategoryScroller';
import SearchBar from './components/SearchBar';
import { NewsItem } from './types';

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: '/images/picture-1.png',
    headline: '',
    content:
      'In August 2024, Elon Musk posted an image on X (formerly Twitter) that appeared to show a headline from The Telegraph. The headline claimed that UK Prime Minister Keir Starmer was planning to build "emergency detainment camps" on the Falkland Islands to house far-right rioters. Musk caption was brief but provocative: “Detainment camps…”'+

'The post went viral, gaining nearly two million views in under an hour. Soon after, it was deleted without comment. However, the damage had already been done—dozens of influencers and accounts had already reshared the image, fueling speculation and outrage.'+

'The Guardian later conducted an investigation into the origin of the article. Journalists traced the fake image back to Ashlea Simon, co-leader of the far-right group Britain First. According to their findings, the article had never appeared in The Telegraph and was entirely fabricated.'+

'A spokesperson for The Telegraph confirmed the article was fake and that they had taken steps to report the false use of their branding. Meanwhile, critics accused Musk of amplifying extremist disinformation. Others defended him, arguing that he was merely raising a question and deleted the post quickly once doubts arose.'+

'The UK government declined to comment directly on the tweet but reiterated its commitment to “addressing public disorder through lawful, democratic means.”'+

'Musk did not issue a formal apology or clarification but continued to post critically about law enforcement and government responses to riots in the UK.'+

'This incident reignited debate around Musk’s role as a platform owner and global influencer—and whether sharing unverified claims, even briefly, can contribute to the spread of misinformation.',
  },
  {
    id: 2,
    image: '/images/picture-2.png',
    headline: '',
    content:
      'In April 2025, NVIDIA — the company behind the chips powering today’s AI boom — made a historic announcement: it will begin manufacturing its AI supercomputers entirely within the United States.'+

'This move, led by CEO Jensen Huang, marks a major industrial pivot. “We’re not just building computers,” Huang said. “We’re building the infrastructure of the future — and that future should be built at home.” Over the next four years, NVIDIA plans to invest up to $500 billion into U.S.-based AI infrastructure, according to The Times.'+

'To execute this vision, NVIDIA is establishing a sprawling American supply chain. Blackwell AI chips, the heart of NVIDIA’s systems, are now being produced at TSMC’s fab in Phoenix, Arizona. Packaging and testing will be handled by Amkor and SPIL nearby. Meanwhile, Foxconn in Houston and Wistron in Dallas are preparing over a million square feet of manufacturing space to assemble the AI supercomputers.'+

'This domestic production shift comes amid rising U.S.–China trade tensions and new semiconductor export controls that could cost NVIDIA up to $5.5 billion, as reported by AP News. Rather than remain dependent on overseas manufacturing, NVIDIA is localizing its operations — a move also echoed by Apple and Microsoft.'+

'The company envisions these new “gigawatt AI factories” — vast data centers built for AI workloads — as the foundation for industries ranging from robotics to biotech. As detailed in an official NVIDIA blog, this effort will not only secure supply chains but also create hundreds of thousands of American jobs.'+

'With this announcement, NVIDIA isn’t just adapting to geopolitical pressure — it’s planting a flag. The age of American-made AI has officially begun.',
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



