import React from 'react';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  content: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
  isTyping?: boolean;
}

export function MessageBubble({ content, sender, timestamp, isTyping }: MessageBubbleProps) {
  const isUser = sender === 'user';

  return (
    <div className={cn(
      "flex w-full mb-4 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] px-4 py-2 rounded-2xl shadow-sm",
        isUser 
          ? "bg-youtube-red text-white rounded-br-sm" 
          : "bg-youtube-surface text-youtube-text-primary rounded-bl-sm",
        "transition-all duration-200 hover:shadow-md"
      )}>
        <div className="text-sm leading-relaxed">
          {isTyping ? (
            <div className="flex items-center space-x-1">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-youtube-text-secondary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-youtube-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-youtube-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          ) : (
            content
          )}
        </div>
        {timestamp && !isTyping && (
          <div className={cn(
            "text-xs mt-1 opacity-70",
            isUser ? "text-right" : "text-left"
          )}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>
    </div>
  );
}