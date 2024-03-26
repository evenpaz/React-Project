import { IoIosHelpCircleOutline } from "react-icons/io";
import { ImBriefcase } from "react-icons/im";
import { TbReportMoney } from "react-icons/tb";
import { FcManager } from "react-icons/fc";
import BannerContacts from "../../components/bannerContacts/BannerContacts";
import ContentBox from "../../components/contentBox/ContentBox";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ImgCarousel from "../../components/imgCarousel/ImgCarousel";
import {
  financeEmail,
  financePhoneNum,
  googleMapLocation,
  officeEmail,
  officePhoneNum,
  salesEmail,
  salesPhoneNum,
  supportEmail,
  supportPhoneNum,
} from "../../assets/contacts/ContactsInfo";
import Form_contact from "../../components/form_contact/Form_contact";
import "./contactPage.scss";
import ButtonMailto from "../../components/buttonMailto/ButtonMailto";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";

const ContactsPage = () => {
  return (
    <>
      <div id="contactsPage">
        <div className="header-container">
          <Header />
        </div>
        <div className="middle-container">
          <div className="middle-container">
            <ImgCarousel
              text="צור קשר"
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
              containerClassName="without_border-contactsPage"
              containerTitle="פנו אלינו"
              contentBox={[
                {
                  icon: (
                    <IoIosHelpCircleOutline
                      size="3em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                  title: "תמיכה",
                  text: supportPhoneNum,
                  link: (
                    <ButtonMailto
                      mailto={`mailto:${supportEmail}`}
                      label={supportEmail}
                    />
                  ),
                },
                {
                  icon: (
                    <ImBriefcase
                      size="3em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                  title: "מכירות",
                  text: salesPhoneNum,
                  link: (
                    <ButtonMailto
                      mailto={`mailto:${salesEmail}`}
                      label={salesEmail}
                    />
                  ),
                },
                {
                  icon: (
                    <TbReportMoney
                      size="3em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                  title: "מחלקת כספים",
                  text: financePhoneNum,
                  link: (
                    <ButtonMailto
                      mailto={`mailto:${financeEmail}`}
                      label={financeEmail}
                    />
                  ),
                },
                {
                  icon: (
                    <FcManager size="3em" color="var(--tertiary-text-color)" />
                  ),
                  title: "הנהלה",
                  text: officePhoneNum,
                  link: (
                    <ButtonMailto
                      mailto={`mailto:${officeEmail}`}
                      label={officeEmail}
                    />
                  ),
                },
              ]}
            />
            <div className="contactFormAndLocation">
              <div className="contactForm">
                <Form_contact title="יצירת קשר" />
              </div>
              <div className="location-map">
                <h1>מפת הגעה</h1>
                <div>{googleMapLocation}</div>
              </div>
            </div>
          </div>
        </div>
        <BannerContacts />
        <Footer />
      </div>
      <WhatsAppBtn />
    </>
  );
};

export default ContactsPage;
