
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NGOs from "./pages/NGOs";
import NGODetail from "./pages/NGODetail";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ChatbotScreen from "./components/ChatbotScreen";
import { Button } from "./components/ui/button";

const queryClient = new QueryClient();

const App = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ngos" element={<NGOs />} />
              <Route path="/ngo/:id" element={<NGODetail />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          
          {/* Chatbot Button */}
          <Button 
            className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90"
            onClick={() => setIsChatbotOpen(true)}
          >
            <MessageCircle size={24} />
          </Button>
          
          {/* Chatbot Screen */}
          <ChatbotScreen 
            isOpen={isChatbotOpen} 
            onClose={() => setIsChatbotOpen(false)} 
          />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
