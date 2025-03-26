
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBackgroundProps {
  scene: string;
  className?: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ scene, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className || ''}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      <Spline 
        scene={scene}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full"
      />
    </div>
  );
};

export default SplineBackground;
