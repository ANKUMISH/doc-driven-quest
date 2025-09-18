import React, { useState } from 'react';
import { Settings, MessageSquare, HelpCircle, Moon, Sun, Volume2, VolumeX, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { StatusIndicator } from './StatusIndicator';

interface ExtensionPopupProps {
  isOpen: boolean;
  onOpenChat: () => void;
  currentVideoTitle?: string;
  isConnected?: boolean;
}

export function ExtensionPopup({ 
  isOpen, 
  onOpenChat, 
  currentVideoTitle = "How to Build Amazing Apps with AI", 
  isConnected = true 
}: ExtensionPopupProps) {
  const [settings, setSettings] = useState({
    darkMode: false,
    soundEnabled: true,
    analyticsEnabled: true,
    notifications: true,
  });

  const updateSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isOpen) return null;

  return (
    <div className="w-80 bg-youtube-background border border-youtube-border rounded-lg shadow-youtube-xl youtube-extension-popup animate-scale-in">
      {/* Header */}
      <div className="p-4 border-b border-youtube-border bg-gradient-to-r from-youtube-red/5 to-youtube-blue/5">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 bg-youtube-red/10 rounded-full flex items-center justify-center">
            <div className="text-lg">🤖</div>
          </div>
          <div>
            <h2 className="font-semibold text-youtube-text-primary">YouTube Video Chatbot</h2>
            <p className="text-xs text-youtube-text-secondary">AI-powered video understanding</p>
          </div>
        </div>
      </div>

      {/* Status Section */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-youtube-text-primary mb-3 flex items-center">
          📺 Current Video Status
        </h3>
        <div className="space-y-3">
          <StatusIndicator 
            status={isConnected ? 'connected' : 'offline'} 
            message={isConnected ? `Connected to video` : 'Not connected to any video'}
          />
          
          {isConnected && (
            <>
              <div className="bg-youtube-surface p-3 rounded-lg border-l-4 border-youtube-blue">
                <div className="text-xs text-youtube-text-secondary mb-1">Current Video:</div>
                <div className="text-sm text-youtube-text-primary font-medium truncate">
                  "{currentVideoTitle}"
                </div>
              </div>
              
              <StatusIndicator 
                status="processing" 
                message="Analyzing video content..."
              />
            </>
          )}
        </div>
      </div>

      <Separator className="bg-youtube-border" />

      {/* Settings Section */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-youtube-text-primary mb-3 flex items-center">
          ⚙️ Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-youtube-surface transition-colors">
            <div className="flex items-center space-x-3">
              {settings.darkMode ? 
                <Moon className="w-4 h-4 text-youtube-blue" /> : 
                <Sun className="w-4 h-4 text-youtube-blue" />
              }
              <div>
                <span className="text-sm text-youtube-text-primary">Dark Mode</span>
                <div className="text-xs text-youtube-text-secondary">Match YouTube's theme</div>
              </div>
            </div>
            <Switch 
              checked={settings.darkMode} 
              onCheckedChange={() => updateSetting('darkMode')} 
            />
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-youtube-surface transition-colors">
            <div className="flex items-center space-x-3">
              {settings.soundEnabled ? 
                <Volume2 className="w-4 h-4 text-youtube-blue" /> : 
                <VolumeX className="w-4 h-4 text-youtube-blue" />
              }
              <div>
                <span className="text-sm text-youtube-text-primary">Sound Effects</span>
                <div className="text-xs text-youtube-text-secondary">Audio notifications</div>
              </div>
            </div>
            <Switch 
              checked={settings.soundEnabled} 
              onCheckedChange={() => updateSetting('soundEnabled')} 
            />
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-youtube-surface transition-colors">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-4 h-4 text-youtube-blue" />
              <div>
                <span className="text-sm text-youtube-text-primary">Show Analytics</span>
                <div className="text-xs text-youtube-text-secondary">Usage statistics</div>
              </div>
            </div>
            <Switch 
              checked={settings.analyticsEnabled} 
              onCheckedChange={() => updateSetting('analyticsEnabled')} 
            />
          </div>
        </div>
      </div>

      <Separator className="bg-youtube-border" />

      {/* Action Buttons */}
      <div className="p-4 space-y-3">
        <Button 
          onClick={onOpenChat} 
          className="w-full bg-youtube-red hover:bg-youtube-red/90 text-white font-medium py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg" 
          disabled={!isConnected}
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Open Chat Panel
        </Button>
        
        <div className="grid grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-youtube-border text-youtube-text-primary hover:bg-youtube-surface"
          >
            <Settings className="w-4 h-4 mr-1" />
            Settings
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-youtube-border text-youtube-text-primary hover:bg-youtube-surface"
          >
            <HelpCircle className="w-4 h-4 mr-1" />
            Help
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        <div className="text-xs text-youtube-text-secondary text-center bg-youtube-surface rounded-lg py-2">
          Version 1.0.0 • Made with ❤️ for YouTube
        </div>
      </div>
    </div>
  );
}