import React, { useState, useEffect, useRef } from 'react';
import { influencers } from "../utils/index";
import '../generalHomepage.css';


const InfluencerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  // Sample influencer data - replace with your actual data
//   const influencers = [
//     {
//       id: 1,
//       name: "Alex Johnson",
//       category: "Fitness & Wellness",
//       imageUrl: "https://source.unsplash.com/random/300x300/?fitness",
//       followers: 125000,
//       engagement: 4.8,
//       posts: 342,
//       bio: "Fitness coach sharing workout tips and healthy lifestyle inspiration.",
//       profileUrl: "/influencer/alex-johnson"
//     },
//     {
//       id: 2,
//       name: "Sophia Chen",
//       category: "Fashion & Style",
//       imageUrl: "https://source.unsplash.com/random/300x300/?fashion",
//       followers: 380000,
//       engagement: 3.6,
//       posts: 567,
//       bio: "Fashion blogger passionate about sustainable clothing and personal style.",
//       profileUrl: "/influencer/sophia-chen"
//     },
//     {
//       id: 3,
//       name: "Marcus Wilson",
//       category: "Tech & Gaming",
//       imageUrl: "https://source.unsplash.com/random/300x300/?tech",
//       followers: 215000,
//       engagement: 5.2,
//       posts: 423,
//       bio: "Tech reviewer and gaming enthusiast sharing the latest in technology.",
//       profileUrl: "/influencer/marcus-wilson"
//     },
//     {
//       id: 4,
//       name: "Priya Sharma",
//       category: "Travel & Adventure",
//       imageUrl: "https://source.unsplash.com/random/300x300/?travel",
//       followers: 520000,
//       engagement: 4.3,
//       posts: 684,
//       bio: "Travel blogger exploring hidden gems around the world.",
//       profileUrl: "/influencer/priya-sharma"
//     },
//     {
//       id: 5,
//       name: "Jordan Taylor",
//       category: "Food & Cooking",
//       imageUrl: "https://source.unsplash.com/random/300x300/?cooking",
//       followers: 178000,
//       engagement: 6.1,
//       posts: 298,
//       bio: "Chef and food stylist sharing delicious recipes and cooking tips.",
//       profileUrl: "/influencer/jordan-taylor"
//     },
//     {
//       id: 6,
//       name: "Emma Rodriguez",
//       category: "Beauty & Skincare",
//       imageUrl: "https://source.unsplash.com/random/300x300/?beauty",
//       followers: 290000,
//       engagement: 5.4,
//       posts: 412,
//       bio: "Beauty expert sharing skincare routines and makeup tutorials.",
//       profileUrl: "/influencer/emma-rodriguez"
//     }
//   ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // Calculate max index based on showing 3 cards at a time
  const maxIndex = Math.max(0, influencers.length - 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > maxIndex ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? maxIndex : newIndex;
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Our Top Influencers</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Connect with our network of talented creators who can help grow your brand
        </p>
      </div>

      <div className="relative">
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 z-10 shadow-lg"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div 
          className="overflow-hidden"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {influencers.map((influencer) => (
              <div 
                key={influencer.id}
                className="px-4 w-1/3 flex-shrink-0"
              >
                <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <img 
                    src={influencer.imageUrl} 
                    alt={influencer.name} 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = '/api/placeholder/300/300';  // Fallback image
                    }}
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-white">{influencer.name}</h3>
                    <p className="text-blue-400 text-sm mb-3">{influencer.category}</p>
                    
                    <div className="flex justify-between mb-4 text-gray-300">
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-white">{formatNumber(influencer.followers)}</span>
                        <span className="text-xs">Followers</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-white">{influencer.engagement}%</span>
                        <span className="text-xs">Engagement</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-white">{influencer.posts}</span>
                        <span className="text-xs">Posts</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{influencer.bio}</p>
                    
                    <a 
                      href={influencer.profileUrl}
                      className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 font-medium mt-auto"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 z-10 shadow-lg"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dots navigation - show dots only for the number of pages */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(influencers.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`w-3 h-3 rounded-full ${
              currentIndex >= index * 3 && currentIndex < (index + 1) * 3 
                ? 'bg-blue-600' 
                : 'bg-gray-600'
            } transition-colors duration-300`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfluencerSlider;