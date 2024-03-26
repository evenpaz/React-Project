import "./customersLogoBanner.scss";

type CustomersLogoBannerProps = {
  imgArr: {
    imgSrc: string;
    imgAlt: string;
  }[];
  title: string;
  id: string;
};

const CustomersLogoBanner = ({
  imgArr,
  title,
  id,
}: CustomersLogoBannerProps) => {
  return (
    <>
      <h1 id={id}>{title}</h1>
      <div className="customersLogoBanner">
        <div className="customersLogo">
          {imgArr.map((img) => {
            return (
              <div className="logo">
                <img src={img.imgSrc} alt={img.imgAlt} width="100px" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CustomersLogoBanner;
