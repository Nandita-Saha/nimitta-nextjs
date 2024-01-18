// components/ImageCarousel.tsx
import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
// import "../styles/globals.css";

interface VideoCarouselProps {
  videos: string[];
}

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`slick-arrow-next`}
      style={{ ...style, right: "50px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`slick-arrow-prev`}
      style={{ ...style, left: "50px", zIndex:"10" }}
      onClick={onClick}
    />
  );
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
   
    fade: true, // Enable fade effect
    cssEase: 'linear',
    arrows: true,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
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
          <video className="w-full h-full block" autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Slider>
  );
};

export default VideoCarousel;
