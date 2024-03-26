import { bannerText } from "../../assets/lorem/lorem";
import LinkToContactPageBtn from "../linkToContactPageBtn/LinkToContactPageBtn";
import "./bannerContactBtn.scss";

const BannerContactBtn = () => {
  return (
    <div className="banner-container">
      <h2>{bannerText}</h2>
      <LinkToContactPageBtn />
    </div>
  );
};

export default BannerContactBtn;
