
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { X, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatbotScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotScreen = ({ isOpen, onClose }: ChatbotScreenProps) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your Impact Assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: inputValue, isUser: true }]);
    
    // Clear input
    setInputValue('');
    
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          text: "Thank you for your message! I'm processing your request and will get back to you shortly.", 
          isUser: false 
        }
      ]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Impact Assistant
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 overflow-hidden">
          {/* 3D Model Area */}
          <div className="relative h-60 md:h-full bg-gray-100 dark:bg-gray-800">
            {!isSplineLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}
            <Spline 
              scene="https://prod.spline.design/gbtUQgKGjX8SWVgs/scene.splinecode"
              onLoad={() => setIsSplineLoaded(true)}
              className="w-full h-full"
            />
          </div>
          
          {/* Chat Area */}
          <div className="flex flex-col h-full">
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.isUser 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t flex gap-2">
              <Input 
                placeholder="Type your message..." 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotScreen;
