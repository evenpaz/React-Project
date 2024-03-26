import { useEffect, useState } from "react";
import "./customersRecommendation.scss";

type CustomersRecommendationProps = {
  customerRecommendationArr: {
    customerLogo: {
      imgSrc: string;
      imgAlt: string;
      imgWidth?: string;
      imgHeight?: string;
    };
    customerRecommend: {
      text: string;
      customerName: string;
      customerPosition: string;
    };
  }[];
};

const CustomersRecommendation = ({
  customerRecommendationArr,
}: CustomersRecommendationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % customerRecommendationArr.length
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="CustomersRecommendation-container">
      <div className="customersRecommendation-container__title">
        <h1>לקוחות ממליצים</h1>
      </div>

      <div className="CustomersRecommendation-container__body">
        <span>
          <div className="customersRecommendation__logo">
            <img
              src={customerRecommendationArr[currentIndex].customerLogo.imgSrc}
              alt={customerRecommendationArr[currentIndex].customerLogo.imgAlt}
              width="150px"
              height={
                customerRecommendationArr[currentIndex].customerLogo.imgHeight
              }
            />
          </div>
          <div className="customersRecommendation__text">
            <p>
              {customerRecommendationArr[currentIndex].customerRecommend.text}
            </p>
          </div>
          <div className="customersRecommendation__nameAndPosition">
            <h2>
              {
                customerRecommendationArr[currentIndex].customerRecommend
                  .customerName
              }
            </h2>
            <p>
              {
                customerRecommendationArr[currentIndex].customerRecommend
                  .customerPosition
              }
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default CustomersRecommendation;
