import React, { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { MessageBubble } from './MessageBubble';
import { WelcomeMessage } from './WelcomeMessage';
import { TypingIndicator } from './TypingIndicator';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
}

export function ChatPanel({ isOpen, onClose, videoTitle }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageContent: string) => {
    if (isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageContent,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate bot response with streaming effect
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I'd be happy to help you understand more about "${videoTitle || 'this video'}". Let me analyze the content and provide you with insights based on your question: "${messageContent}".`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-4 top-20 w-96 h-[600px] bg-youtube-background border border-youtube-border rounded-lg shadow-youtube-xl z-50 flex flex-col youtube-chatbot-panel animate-slide-in-right">
      <ChatHeader 
        onClose={onClose}
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
      />

      <ScrollArea className="flex-1">
        <div className="p-4">
          {messages.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <div className="space-y-2">
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  content={message.content}
                  sender={message.sender}
                  timestamp={message.timestamp}
                />
              ))}
              {isLoading && <TypingIndicator />}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      <ChatInput 
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        placeholder="Ask about this video..."
      />
    </div>
  );
}