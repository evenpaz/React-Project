export type LogoProps = {
  imgSrc: string;
  imgAlt: string;
  imgHeight?: string;
  imgWidth?: string;
};

const Logo = ({ imgSrc, imgAlt, imgHeight, imgWidth }: LogoProps) => {
  return <img src={imgSrc} alt={imgAlt} height={imgHeight} width={imgWidth} />;
};

export default Logo;
