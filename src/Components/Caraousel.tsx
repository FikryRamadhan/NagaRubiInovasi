import React, { useState, useEffect } from 'react';

interface CarouselItem {
  content: React.ReactNode;
}

interface CarouselProps {
  carousel: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ carousel }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carousel.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carousel.length]);

  return (
    <div className="relative w-full">
      {/* Card Container with the content */}
      <div className="relative bg-white shadow-md rounded-lg w-full h-1/3 flex items-center justify-center overflow-hidden">
        {carousel[currentIndex].content}

        {/* Dots navigation inside the card, positioned at the bottom */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {carousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none transition-colors duration-300 ${
                index === currentIndex ? 'bg-ruby' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
