
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-16 px-10 flex flex-col items-center">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 animate-fade-in">
          A Career
          <br />
          Counselling
          <br />
          Platform to
          <br />
          help you
          <br />
          navigate
          <br />
          your career
          <br />
          path
        </h1>
        <div className="mt-6">
          <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-none px-8">
            Find Out More
          </Button>
        </div>
      </div>
      
      <div className="max-w-xl mx-auto mt-16 text-sm">
        <p className="mb-6 text-center">
          Our Professional Assessment Tools is specially designed to help individuals identify their strengths and weaknesses. With 15 different assessment types, it covers a comprehensive range of skills and attributes. Each assessment takes 15-20 minutes to complete, and provides detailed reports with actionable insights and recommendations. With regular progress tracking, you can see your growth over time.
        </p>
        
        <p className="text-center">
          Finding a suitable career can be one of the most crucial decisions in life. Our career recommendation system, using AI and 30 years of data, can match your profile with potential career paths where you're likely to succeed and find satisfaction. By considering your skills, interests, values, and personality, we provide personalized career guidance.
        </p>
        
        <div className="flex justify-center mt-6">
          <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-none px-6">
            Find More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
