import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
}

function NewsCard({ item }: NewsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ sender: 'user' | 'other'; text: string }[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(`chat_${item.id}`);
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  }, [item.id]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    const randomReplies = [
      "Interesting point!",
      "Thanks for the comment!",
      "Good question!",
      "I never thought of that!",
    ];

    const otherMessage = {
      sender: 'other',
      text: randomReplies[Math.floor(Math.random() * randomReplies.length)],
    };

    const newMessages = [...messages, userMessage, otherMessage];
    setMessages(newMessages);
    localStorage.setItem(`chat_${item.id}`, JSON.stringify(newMessages));
    setInput('');
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#050f0c]/90 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-3">{item.headline}</h2>

        <div
          className={`overflow-hidden text-white/80 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="mb-4">{item.content}</p>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1FCFD5] hover:bg-[#37e7eb] text-sm text-black font-semibold transition-all duration-200"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            <span>{isExpanded ? 'Less' : 'More'}</span>
          </button>

          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1FCFD5] hover:bg-[#37e7eb] text-sm text-black font-semibold transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Comment</span>
          </button>
        </div>

        {isChatOpen && (
          <div className="mt-6 bg-white/5 p-4 rounded-xl max-h-80 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`w-fit px-4 py-2 rounded-xl text-sm ${
                  msg.sender === 'user'
                    ? 'ml-auto bg-[#1FCFD5] text-black'
                    : 'bg-[#143426] text-white'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Write a comment..."
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded-full bg-[#1FCFD5] hover:bg-[#37e7eb] text-black font-semibold text-sm"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsCard;






