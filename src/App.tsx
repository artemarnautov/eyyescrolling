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
    image: '/images/picture-3.png',
    headline: '',
    content:
      `A new star has entered the galaxy far, far away.
      

'During a dramatic reveal at the Star Wars Celebration event in Tokyo, Lucasfilm confirmed that Ryan Gosling will lead the upcoming film Star Wars: Starfighter, a standalone project set to chart a bold new course in the franchise. The announcement immediately sent waves through the fan community, igniting curiosity and anticipation — not only for the content, but for how Gosling, known for his nuanced roles in Drive and Blade Runner 2049, will fit into one of cinema’s most storied universes.
      

'The film, directed by Shawn Levy (Stranger Things, Deadpool & Wolverine), is slated for release on May 28, 2027. According to reporting from The Guardian, the project will take place about five years after the events of The Rise of Skywalker and promises to introduce a completely new cast of characters, unbound by the Skywalker legacy. Levy described the vision as “a world we haven’t seen on screen — a new corner of the Star Wars universe,” emphasizing creative freedom and fresh storytelling.
      

'Gosling, who has been a longtime fan of the franchise, expressed genuine excitement. In a touching moment on stage, he shared a childhood photo of himself on a bed covered in Star Wars-themed sheets. “I was probably dreaming about Star Wars before I even saw the film,” he joked. People Magazine noted that Gosling has been circling big-franchise roles for years, but this one felt “personal” for the actor.
      

'Behind the scenes, the script is being penned by Jonathan Tropper, known for character-driven dramas like This Is Where I Leave You. According to Vanity Fair, production is expected to begin in the fall of 2025. Tropper has hinted that the film will explore moral ambiguity and the cost of power — familiar Star Wars themes, but through a more intimate, character-focused lens.
      

'Fans have reason to be optimistic. With his proven ability to blend quiet introspection with explosive energy, and Levy’s track record of balancing spectacle with emotion, Starfighter could become a defining entry in the post-Skywalker era of the franchise.
      

'And while few plot details have been released, one thing is clear: the Force is with Ryan Gosling.`,
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



