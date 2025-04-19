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
      <div className="px-4 sm:px-6 pb-6 pt-4">
        <h2 className="text-xl font-semibold text-white mb-3">{item.headline}</h2>

        <div
          className={`text-white/80 text-lg leading-relaxed transition-all duration-300 ease-in-out ${
            isExpanded ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          {item.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex








