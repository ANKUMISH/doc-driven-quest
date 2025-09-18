import React from 'react';
import { X, Settings, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onClose: () => void;
  onSettingsClick?: () => void;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
}

export function ChatHeader({ onClose, onSettingsClick, isDarkMode, onThemeToggle }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-youtube-border bg-youtube-surface rounded-t-lg">
      <div className="flex items-center space-x-2">
        <div className="text-lg">🤖</div>
        <h3 className="font-medium text-youtube-text-primary">Video AI Assistant</h3>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      
      <div className="flex items-center space-x-1">
        {onThemeToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeToggle}
            className="h-8 w-8 text-youtube-text-secondary hover:text-youtube-text-primary transition-colors"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        )}
        
        {onSettingsClick && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            className="h-8 w-8 text-youtube-text-secondary hover:text-youtube-text-primary transition-colors"
          >
            <Settings className="h-4 w-4" />
          </Button>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 text-youtube-text-secondary hover:text-youtube-text-primary transition-colors"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}