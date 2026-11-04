
import React, { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallbackSrc?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  placeholder = "/api/placeholder/400/300",
  fallbackSrc = "/images/placeholder.jpg",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempt, setAttempt] = useState(0);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setError(false);
    setAttempt(0);
  }, [src]);

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { rootMargin: "100px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleError = () => {
    setIsLoaded(false);

    if (attempt === 0 && fallbackSrc && fallbackSrc !== src) {
      setCurrentSrc(fallbackSrc);
      setAttempt(1);
    } else if (attempt <= 1 && placeholder && placeholder !== currentSrc) {
      setCurrentSrc(placeholder);
      setAttempt(2);
    } else {
      setError(true);
    }
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
    >
      {isInView && !error && (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          onLoad={() => {
            setIsLoaded(true);
            setError(false);
          }}
          onError={handleError}
          loading="lazy"
          decoding="async"
          className={`block h-full w-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-sm text-gray-500">Loading...</span>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="p-4 text-center text-gray-500">
            <div className="mb-2 text-2xl">📷</div>
            <div>Image unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
