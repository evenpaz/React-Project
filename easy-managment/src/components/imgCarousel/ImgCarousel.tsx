import { ReactNode, useEffect, useState } from "react";
import "./imgCarousel.scss";

type ImgCarouselProps = {
  imgArr: { imgSrc: string; imgAlt: string }[];
  imgHeight: string;
  imgWidth: string;
  text?: string | ReactNode;
};

const ImgCarousel = ({
  imgArr,
  imgHeight,
  imgWidth,
  text,
}: ImgCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % imgArr.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="imgCarousel-box">
      <img
        src={imgArr[currentIndex].imgSrc}
        alt={imgArr[currentIndex].imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
      <h1 id="imgCarousel-box__text">{text}</h1>
    </div>
  );
};

export default ImgCarousel;
