
import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Spline from '@splinetool/react-spline';

interface ChatbotScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotScreen: React.FC<ChatbotScreenProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi there! I'm your ImpactGive assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: "user", content: input }]);

    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Thanks for your message! I'm currently in demo mode, but our team is working to make me smarter. How else can I assist you?",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4">
      <div className="bg-gray-900 text-gray-100 rounded-xl shadow-xl w-full max-w-lg h-[80vh] flex flex-col overflow-hidden border border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">ImpactGive Assistant</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 hover:bg-gray-800"
          >
            <X size={18} className="text-gray-400" />
          </Button>
        </div>

        {/* Chat content with 3D model positioned to the side */}
        <div className="relative flex-1 overflow-y-auto p-4">
          <div className="flex h-full">
            {/* Chat messages area - taking 70% of the space */}
            <div className="w-full md:w-[70%] z-10 space-y-4 overflow-y-auto pr-2">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-lg px-4 py-2 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-gray-800 text-gray-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            
            {/* 3D model area - taking 30% of the space, only visible on medium screens and up */}
            <div className="hidden md:block md:w-[30%] relative">
              <div className="absolute inset-0 opacity-70 pointer-events-none">
                <Spline scene="https://prod.spline.design/llGL96WSfPssVD22/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer with input */}
        <form onSubmit={handleSubmit} className="border-t border-gray-800 p-4 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          />
          <Button type="submit" size="icon" className="h-10 w-10 bg-primary hover:bg-primary/90">
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotScreen;
