// components/ImageCarousel.tsx
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VideoCarouselProps {
  videos: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // Enable fade effect
    cssEase: 'linear',
    arrows: false,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      // If not the last slide, move to the next one after 5 seconds
      if (nextSlide < videos.length - 1) {
        setTimeout(() => {
          sliderRef.current?.slickNext();
        }, 5000);
      }
    },
  };

  useEffect(() => {
    // Start the automatic transition after mounting
    setTimeout(() => {
      sliderRef.current?.slickNext();
    }, 5000);
  }, []);

  return (
    <Slider {...settings} ref={sliderRef}>
      {videos.map((video, index) => (
        <div key={index}>
          <video className="w-full h-screen block" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Slider>
  );
};

export default VideoCarousel;
