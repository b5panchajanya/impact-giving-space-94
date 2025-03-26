
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SplineButtonProps {
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

const SplineButton = ({ buttonText, onClick, className }: SplineButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    if (onClick) {
      onClick();
    }
    // Reset loading state after 2 seconds for demo purposes
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Button 
      onClick={handleClick} 
      className={`relative overflow-hidden ${className}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </div>
      ) : (
        buttonText
      )}
    </Button>
  );
}

export default SplineButton;
