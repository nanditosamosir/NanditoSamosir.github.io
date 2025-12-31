import React, { useState, useRef, useEffect } from 'react';
import { generateEditorResponse } from '../services/geminiService';
import { ChatMessage, ChatRole } from '../types';

interface AskEditorProps {
  portfolioContext: string;
}

export const AskEditor: React.FC<AskEditorProps> = ({ portfolioContext }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Greetings! I'm the Editor-in-Chief. Need the scoop on this developer? Ask away." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Mencegah scroll ke bawah saat pertama kali komponen dimuat
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: ChatRole.USER, text: userMsg }]);

    // Get AI response
    const responseText = await generateEditorResponse(userMsg, portfolioContext);

    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: responseText }]);
    setLoading(false);
  };

  return (
    <div className="border-4 border-double border-news-ink p-4 bg-white shadow-xl relative mt-8">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-news-ink text-white px-4 py-1 font-sans font-bold uppercase tracking-widest text-xs rotate-0 z-10">
        Ask The Editor
      </div>
      
      <div className="h-64 overflow-y-auto mb-4 border border-gray-200 p-4 font-body text-sm bg-gray-50 mt-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-3 ${msg.role === ChatRole.USER ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 border ${
              msg.role === ChatRole.USER 
                ? 'bg-news-ink text-white border-news-ink' 
                : 'bg-news-paper text-news-ink border-news-ink shadow-[2px_2px_0px_rgba(0,0,0,1)]'
            }`}>
              {msg.role === ChatRole.MODEL && <span className="font-headline font-bold mr-2 text-news-accent">ED:</span>}
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div className="text-center font-sans text-xs font-bold uppercase tracking-widest text-gray-400">...Editor is typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your inquiry here..."
          className="flex-1 font-sans text-sm p-2 border-2 border-news-ink focus:outline-none focus:bg-yellow-50 placeholder-gray-400"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-news-accent text-white font-sans font-bold uppercase px-6 py-2 border-2 border-news-ink hover:bg-news-ink transition-colors disabled:opacity-50 tracking-wider text-xs"
        >
          Send
        </button>
      </div>
    </div>
  );
};