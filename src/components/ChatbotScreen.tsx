
import React, { useState } from 'react';
import { X, Send, Bot, UserCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotScreen: React.FC<ChatbotScreenProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! I\'m ImpactGive Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      text: option,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getOptionResponse(option),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string) => {
    const lowerCaseMessage = message.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerCaseMessage.includes('donate')) {
      return 'You can donate to any of our verified NGOs by visiting their profile page and clicking the "Donate" button. Would you like me to show you some featured NGOs?';
    } else if (lowerCaseMessage.includes('volunteer')) {
      return 'Great! To volunteer, you can browse our events page and register for events that interest you. Would you like to see the upcoming volunteer opportunities?';
    } else if (lowerCaseMessage.includes('ngo')) {
      return 'We have many verified NGOs on our platform working across different causes. You can explore them on our NGOs page. Would you like me to recommend some based on your interests?';
    } else {
      return 'I\'m here to help! You can ask me about donations, volunteering, NGOs, events, or your account information.';
    }
  };

  const getOptionResponse = (option: string) => {
    switch (option) {
      case 'Navigation Support':
        return 'I can help you navigate to different sections of our platform. Would you like to explore NGOs, ongoing events, or donation options?';
      case 'Donation Assistance':
        return 'I can guide you through the donation process. You can make monetary donations via secure payment gateways or contribute in-kind items. Would you like to donate to a specific NGO?';
      case 'Volunteer Help':
        return 'Looking to volunteer? I can help you find events based on your interests, track your volunteer hours, and earn certificates. What causes are you passionate about?';
      case 'NGO Support':
        return 'For NGO representatives, I can assist with event management, volunteer coordination, and donor communications. What aspect of NGO management do you need help with?';
      case 'Gamification':
        return 'Our platform rewards your contributions with badges and points! Would you like to check your current achievements or learn how to earn more points?';
      case 'User Support':
        return 'Need help with your account? I can assist with login issues, payment troubleshooting, and security concerns. What specific support do you need?';
      case 'Real-Time Updates':
        return 'I can provide updates on your registered events, donation status, and platform notifications. Would you like me to check any specific updates for you?';
      default:
        return 'How else can I assist you today?';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) return null;

  const chatOptions = [
    'Navigation Support',
    'Donation Assistance',
    'Volunteer Help',
    'NGO Support',
    'Gamification',
    'User Support',
    'Real-Time Updates',
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden flex flex-col h-[80vh]">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-primary text-white">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <h2 className="font-semibold">ImpactGive Assistant</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-primary-dark rounded-full p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-full">
          {/* Spline 3D Model Section */}
          <div className="h-64 md:h-auto md:w-1/3 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
            <Spline 
              scene="https://prod.spline.design/llGL96WSfPssVD22/scene.splinecode"
              className="w-full h-full"
            />
          </div>

          {/* Chat Section */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-gray-100 dark:bg-gray-800 text-foreground rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot size={18} className="mt-1 text-primary" />
                      )}
                      <div>
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      {message.sender === 'user' && (
                        <UserCircle size={18} className="mt-1 text-white" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick options if no option selected yet */}
            {messages.length <= 2 && !selectedOption && (
              <div className="p-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">How can I help you today?</p>
                <div className="flex flex-wrap gap-2">
                  {chatOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-xs transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <div className="p-4 border-t flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 border-none focus:outline-none focus:ring-1 focus:ring-primary rounded-full px-4 py-2 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="bg-primary hover:bg-primary/90 text-white rounded-full p-2 flex items-center justify-center disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotScreen;
