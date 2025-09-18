import React from 'react';
import { Play, MessageSquare, Lightbulb } from 'lucide-react';

export function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-youtube-red/10 rounded-full flex items-center justify-center mb-4">
        <MessageSquare className="w-8 h-8 text-youtube-red" />
      </div>
      
      <h3 className="text-lg font-medium text-youtube-text-primary mb-2">
        Welcome to Video AI Assistant!
      </h3>
      
      <p className="text-sm text-youtube-text-secondary mb-6 max-w-sm">
        I can help you understand this video, answer questions, and provide insights about the content.
      </p>
      
      <div className="space-y-3 w-full max-w-sm">
        <div className="flex items-center space-x-3 p-3 bg-youtube-surface rounded-lg">
          <Play className="w-4 h-4 text-youtube-blue flex-shrink-0" />
          <span className="text-xs text-youtube-text-secondary">Ask about specific moments in the video</span>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-youtube-surface rounded-lg">
          <Lightbulb className="w-4 h-4 text-youtube-blue flex-shrink-0" />
          <span className="text-xs text-youtube-text-secondary">Get summaries and key insights</span>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-youtube-surface rounded-lg">
          <MessageSquare className="w-4 h-4 text-youtube-blue flex-shrink-0" />
          <span className="text-xs text-youtube-text-secondary">Discuss topics in detail</span>
        </div>
      </div>
      
      <div className="mt-6 text-xs text-youtube-text-secondary">
        Type a message below to get started! 🚀
      </div>
    </div>
  );
}