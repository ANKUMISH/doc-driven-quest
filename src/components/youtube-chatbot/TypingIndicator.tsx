import React from 'react';

export function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-sm bg-youtube-surface">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-youtube-text-secondary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-youtube-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-youtube-text-secondary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-xs text-youtube-text-secondary">AI is thinking...</span>
        </div>
      </div>
    </div>
  );
}