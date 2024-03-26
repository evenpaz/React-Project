import { FaRegCheckCircle } from "react-icons/fa";
import { lorem10, lorem20, lorem40 } from "../../assets/lorem/lorem";
import BannerContactBtn from "../../components/bannerContactBtn/BannerContactBtn";
import BannerContacts from "../../components/bannerContacts/BannerContacts";
import ContentBox from "../../components/contentBox/ContentBox";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ImgCarousel from "../../components/imgCarousel/ImgCarousel";
import "./aboutUsPage.scss";
import ContentBoxOption2 from "../../components/contentBox-option2/ContentBox-option2";
import TermsAndPrivacy from "../../components/termsAndPrivacy/TermsAndPrivacy";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";

const AboutUsPage = () => {
  return (
    <>
      <div id="aboutUsPage">
        <div className="header-container">
          <Header />
        </div>
        <div className="middle-container">
          <div className="middle-container__img-carousel-container">
            <ImgCarousel
              text="אודות"
              imgArr={[
                {
                  imgSrc:
                    "https://www.softechlogix.com/wp-content/uploads/2017/02/fowler-background.jpg",
                  imgAlt: "bg image 1",
                },
              ]}
              imgHeight={"400em"}
              imgWidth={"100%"}
            />
            <ContentBox
              id="the-solution-for-business"
              containerTitle="Easy-management – הפתרון המלא לסידור עבודה בעסקים"
              containerClassName="textAndImgInline"
              contentBox={[
                {
                  text: lorem40,
                  icon: (
                    <img
                      src="https://www.shiftorganizer.com/wp-content/uploads/2016/08/about-pic.jpg"
                      alt="about us image"
                      width="250em"
                      height="150em"
                    />
                  ),
                },
              ]}
            />
            <ContentBoxOption2
              containerTitle="ערכים עסקיים"
              containerClassName="rectangular_border_option2"
              contentBox={[
                {
                  icon: (
                    <FaRegCheckCircle
                      size="2em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                  title: "שירות מקצועי ואמין",
                  text: lorem10,
                },
                {
                  icon: (
                    <FaRegCheckCircle
                      size="2em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                  title: "התאמה מושלמת ללקוח",
                  text: lorem20,
                },
                {
                  icon: (
                    <FaRegCheckCircle
                      size="2em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                  title: "חדשנות",
                  text: lorem20,
                },
                {
                  icon: (
                    <FaRegCheckCircle
                      size="2em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                  title: "נגישות מקסימלית",
                  text: lorem10,
                },
              ]}
            />
            <BannerContactBtn />
            <ContentBox
              containerTitle="הצוות שלנו"
              containerClassName="titleAndText"
              contentBox={[
                { title: "יעל אבן פז", text: "מנכ''לית" },
                { title: "גל אבן פז", text: "מנהל פיתוח" },
                { title: "אור בן", text: "הסברה" },
                { title: "גל בר", text: "כספים" },
                { title: "איה אל", text: "מנהלת מוצר" },
                { title: "רועי בור", text: "ראש מחלקת עיצוב" },
              ]}
            />
          </div>
          <TermsAndPrivacy />
        </div>
        <BannerContacts />
        <Footer />
      </div>
      <WhatsAppBtn />
    </>
  );
};

export default AboutUsPage;
