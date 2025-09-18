import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChatPanel } from '@/components/youtube-chatbot/ChatPanel';
import { ExtensionPopup } from '@/components/youtube-chatbot/ExtensionPopup';
import { MessageSquare, Settings } from 'lucide-react';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-youtube-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-youtube-red/10 via-youtube-background to-youtube-blue/10">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-5xl font-bold text-youtube-text-primary mb-6">
              YouTube Video Chatbot
            </h1>
            <p className="text-xl text-youtube-text-secondary mb-8 max-w-2xl mx-auto">
              Experience the next generation of video interaction with our AI-powered chatbot extension. 
              Chat about any YouTube video and get instant insights, summaries, and answers.
            </p>
            
            <div className="flex justify-center space-x-4 mb-12">
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-youtube-red hover:bg-youtube-red/90 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Try Chat Demo
              </Button>
              
              <Button 
                onClick={() => setIsPopupOpen(true)}
                variant="outline"
                className="border-youtube-border text-youtube-text-primary hover:bg-youtube-surface px-8 py-3 text-lg font-medium rounded-lg"
              >
                <Settings className="w-5 h-5 mr-2" />
                View Extension
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-youtube-surface rounded-lg border border-youtube-border">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-youtube-text-primary mb-2">Smart Conversations</h3>
            <p className="text-youtube-text-secondary">
              Have natural conversations about video content with advanced AI understanding.
            </p>
          </div>
          
          <div className="text-center p-6 bg-youtube-surface rounded-lg border border-youtube-border">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-youtube-text-primary mb-2">Real-time Analysis</h3>
            <p className="text-youtube-text-secondary">
              Get instant insights and summaries as you watch with streaming AI responses.
            </p>
          </div>
          
          <div className="text-center p-6 bg-youtube-surface rounded-lg border border-youtube-border">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-youtube-text-primary mb-2">YouTube Native</h3>
            <p className="text-youtube-text-secondary">
              Seamlessly integrated design that feels like part of YouTube's interface.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Panel Demo */}
      <ChatPanel 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        videoTitle="How to Build Amazing Apps with AI - Complete Tutorial"
      />

      {/* Extension Popup Demo */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setIsPopupOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <ExtensionPopup 
              isOpen={isPopupOpen}
              onOpenChat={() => {
                setIsPopupOpen(false);
                setIsChatOpen(true);
              }}
              currentVideoTitle="How to Build Amazing Apps with AI - Complete Tutorial"
              isConnected={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
