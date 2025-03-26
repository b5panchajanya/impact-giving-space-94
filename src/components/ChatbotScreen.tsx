
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { X, MessageCircle, Send, Navigation, DollarSign, Users, Award, HelpCircle, Bell, Heart } from 'lucide-react';
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
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const chatbotOptions = [
    {
      id: 1,
      title: "Navigation Support",
      description: "Guide users to NGOs, donations, events, and profiles.",
      icon: <Navigation className="h-5 w-5 text-primary" />
    },
    {
      id: 2,
      title: "Donation Assistance",
      description: "Explain options, process payments, track donations.",
      icon: <DollarSign className="h-5 w-5 text-primary" />
    },
    {
      id: 3,
      title: "Volunteer Help",
      description: "Find events, track hours, earn badges & certificates.",
      icon: <Users className="h-5 w-5 text-primary" />
    },
    {
      id: 4,
      title: "NGO Support",
      description: "Manage events, volunteers, donors, and certificates.",
      icon: <Heart className="h-5 w-5 text-primary" />
    },
    {
      id: 5,
      title: "Gamification",
      description: "Show badges, points, and leaderboard rankings.",
      icon: <Award className="h-5 w-5 text-primary" />
    },
    {
      id: 6,
      title: "User Support",
      description: "Answer FAQs, troubleshoot login/payments, ensure security.",
      icon: <HelpCircle className="h-5 w-5 text-primary" />
    },
    {
      id: 7,
      title: "Real-Time Updates",
      description: "Notify users about events, donations, and reminders.",
      icon: <Bell className="h-5 w-5 text-primary" />
    },
    {
      id: 8,
      title: "Engaging Responses",
      description: "Personalized, concise, and action-driven chats.",
      icon: <MessageCircle className="h-5 w-5 text-primary" />
    }
  ];

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

  const handleOptionSelect = (optionId: number) => {
    setSelectedOption(optionId);
    const option = chatbotOptions.find(opt => opt.id === optionId);
    if (option) {
      // Add user selection as a message
      setMessages([
        ...messages, 
        { text: `I'd like help with: ${option.title}`, isUser: true }
      ]);
      
      // Simulate bot response based on selection
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            text: `I'd be happy to help with ${option.title.toLowerCase()}. ${option.description} What specific information are you looking for?`, 
            isUser: false 
          }
        ]);
      }, 1000);
    }
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
              scene="https://prod.spline.design/llGL96WSfPssVD22/scene.splinecode"
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
            
            {/* Option Buttons */}
            {messages.length === 1 && (
              <div className="p-4 border-t grid grid-cols-1 sm:grid-cols-2 gap-2">
                {chatbotOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="flex items-center gap-2 justify-start h-auto py-2"
                    onClick={() => handleOptionSelect(option.id)}
                  >
                    {option.icon}
                    <div className="text-left">
                      <div className="font-semibold">{option.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{option.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            )}
            
            {/* Input Area */}
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
