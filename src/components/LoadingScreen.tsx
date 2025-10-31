import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 flex items-center justify-center z-50">
      <div className="text-center space-y-8 px-4">
        <div className="relative">
          <img 
            src="https://cdn.poehali.dev/files/1b1431e4-2a8b-47e5-8bfa-20f013ab753a.jpg" 
            alt="LIME" 
            className="h-32 w-auto mx-auto animate-pulse"
          />
        </div>
        
        <div className="space-y-4">
          <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            Загрузка {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
