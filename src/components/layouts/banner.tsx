import { useState } from 'react';

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    'https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709394834476.jpg?x-oss-process=image/format,webp',
    'https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1710395584582.jpg?x-oss-process=image/format,webp',
    'https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709792829614.jpg?x-oss-process=image/format,webp',
    'https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1711019221283.jpg?x-oss-process=image/format,webp',
    'https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1710396072637.jpg?x-oss-process=image/format,webp',
    'https://prod-global-static.oss-us-east-1.aliyuncs.com/globalAdmin/1709808219202.jpg?x-oss-process=image/format,webp'
  ];

  const goToPreviousSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow-container">
      <div className="relative w-[1500px] ">
        <img src={images[slideIndex]} alt="" className='' />
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l z-10 bg-transparent text-slate-950  hover:bg-gray-300"
          onClick={goToPreviousSlide}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r z-10 bg-transparent text-slate-950 hover:bg-gray-300"
          onClick={goToNextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Banner;