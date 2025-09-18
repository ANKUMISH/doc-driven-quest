import React, { useState, KeyboardEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export function ChatInput({ 
  onSendMessage, 
  isLoading = false, 
  placeholder = "Ask about this video..." 
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-youtube-border bg-youtube-background">
      <div className="flex items-end space-x-2">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={isLoading}
            rows={1}
            className={cn(
              "w-full px-4 py-3 pr-12 rounded-full border border-youtube-border",
              "bg-youtube-surface text-youtube-text-primary placeholder-youtube-text-secondary",
              "focus:outline-none focus:ring-2 focus:ring-youtube-blue focus:border-transparent",
              "resize-none transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "text-sm leading-tight"
            )}
            style={{ 
              minHeight: '44px',
              maxHeight: '100px'
            }}
          />
          
          <div className="absolute bottom-2 right-2 text-xs text-youtube-text-secondary">
            {message.length > 0 && (
              <span className={cn(
                message.length > 500 ? "text-youtube-red" : "text-youtube-text-secondary"
              )}>
                {message.length}/500
              </span>
            )}
          </div>
        </div>
        
        <Button
          onClick={handleSend}
          disabled={!message.trim() || isLoading}
          size="icon"
          className={cn(
            "h-11 w-11 rounded-full bg-youtube-red hover:bg-youtube-red/90",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-200 shadow-md hover:shadow-lg"
          )}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <div className="mt-2 text-xs text-youtube-text-secondary text-center">
        Press Enter to send • Shift+Enter for new line
      </div>
    </div>
  );
}