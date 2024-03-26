import { IoMdTime, IoIosHelpCircleOutline } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { GrRestaurant } from "react-icons/gr";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbCalendarUser, TbReportMoney } from "react-icons/tb";
import { PiFilesFill } from "react-icons/pi";
import { lorem20, lorem40 } from "../../assets/lorem/lorem";
import BannerContactBtn from "../../components/bannerContactBtn/BannerContactBtn";
import BannerContacts from "../../components/bannerContacts/BannerContacts";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ImgCarousel from "../../components/imgCarousel/ImgCarousel";
import ProductsAndServicesOptionsList from "../../components/productsAndServicesOptions-list/ProductsAndServicesOptions-list";
import "./productsPage.scss";
import HashLinkBox from "../../components/hashLinkBox/HashLinkBox";
import { HashLink } from "react-router-hash-link";
import ContentBoxOption3 from "../../components/contentBox-option3/ContentBox-option3";
import CustomersRecommendation from "../../components/customersRecommendation/CustomersRecommendation";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";

const ProductsPage = () => {
  return (
    <>
      <div id="productsPage">
        <div className="header-container">
          <Header />
        </div>
        <div className="middle-container">
          <div className="middle-container">
            <ImgCarousel
              text="מוצרים"
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
            <HashLinkBox
              id="productsAndServices"
              containerTitle="מוצרים ושירותים- Easy-management"
              hashLinkBox={[
                {
                  text: "תוכנת סידור עבודה",
                  linkTo: "/products/#schedulingSoftware",
                },
                {
                  text: "שעון נוכחות",
                  linkTo: "/products/#timeClock",
                },
                {
                  text: "דוחות וסטטיסטיקות",
                  linkTo: "/products/#reportsAndStatistics",
                },
                {
                  text: "החלפת עובדים",
                  linkTo: "/products/#employeesChange",
                },
                {
                  text: "חופשות",
                  linkTo: "/products/#holidays",
                },
                {
                  text: "טיפים למסעדות",
                  linkTo: "/products/#tipsForRestaurants",
                },
                {
                  text: "ממשק למערכות שכר",
                  linkTo: "/products/#payrollSystems",
                },
                {
                  text: "תמיכה והטמעה",
                  linkTo: "/products/#supportAndImplementation",
                },
              ]}
            />
            <BannerContactBtn />
            <ContentBoxOption3
              contentBoxOption3={[
                {
                  id: "schedulingSoftware",
                  title: "תוכנת סידור עבודה",
                  text: lorem40 + lorem40,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: <ImProfile size="8em" color="#26c2ce" />,
                },
                {
                  id: "timeClock",
                  title: "שעון נוכחות",
                  text: lorem40 + lorem40 + lorem20,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: <IoMdTime size="8em" color="#26c2ce" />,
                },
                {
                  id: "reportsAndStatistics",
                  title: "דוחות וסטטיסטיקות",
                  text: lorem40,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: (
                    <PiFilesFill
                      size="8em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                },
                {
                  id: "employeesChange",
                  title: "החלפת עובדים",
                  text: lorem40,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: (
                    <AiOutlineUserSwitch
                      size="8em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                },
                {
                  id: "holidays",
                  title: "חופשות",
                  text: lorem20,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: (
                    <TbCalendarUser
                      size="8em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                },
                {
                  id: "tipsForRestaurants",
                  title: "טיפים למסעדות",
                  text: lorem40 + lorem40,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: (
                    <GrRestaurant
                      size="8em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                },
                {
                  id: "payrollSystems",
                  title: "ממשק למערכות שכר",
                  text: lorem40 + lorem20,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: (
                    <TbReportMoney
                      size="8em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                },
                {
                  id: "supportAndImplementation",
                  title: "תמיכה והטמעה",
                  text: lorem40,
                  link: (
                    <HashLink to={"/products/#productsAndServices"} smooth>
                      חזרה
                    </HashLink>
                  ),
                  icon: (
                    <IoIosHelpCircleOutline
                      size="8em"
                      color="var(--tertiary-text-color)"
                    />
                  ),
                },
              ]}
            />
            <ProductsAndServicesOptionsList />
            <CustomersRecommendation
              customerRecommendationArr={[
                {
                  customerLogo: {
                    imgSrc: "../../../public/customersLogo/apoalimBankLogo.png",
                    imgAlt: "Apoalim",
                  },
                  customerRecommend: {
                    text: `"עם איזי-מאנג'מנט אני מקבלת פתרונות לבעיות שיבוץ אונליין"`,
                    customerName: "מאיה גולד",
                    customerPosition: "מנהלת תפעול וכח אדם",
                  },
                },
                {
                  customerLogo: {
                    imgSrc: "../../../public/customersLogo/bbbLogo.png",
                    imgAlt: "BBB",
                  },
                  customerRecommend: {
                    text: `"פשוט, ידידותי וקל"`,
                    customerName: "איתי לאז",
                    customerPosition: "מנהל הדרכות ושירות ברשת",
                  },
                },
                {
                  customerLogo: {
                    imgSrc: "../../../public/customersLogo/castroLogo.png",
                    imgAlt: "Castro",
                  },
                  customerRecommend: {
                    text: `"תוכנת שיבוץ חכמה ונוחה"`,
                    customerName: "צוף אן",
                    customerPosition: "מנהל אדמיניסטרטיבי",
                  },
                },
                {
                  customerLogo: {
                    imgSrc: "../../../public/customersLogo/escroomLogo.png",
                    imgAlt: "EscapeRoom",
                  },
                  customerRecommend: {
                    text: `"תוכנת  איזי-מאנג'מנט הפכה את העבודה להרבה יותר קלה"`,
                    customerName: "מארלי",
                    customerPosition: "ראש מחלקת כח אדם",
                  },
                },
                {
                  customerLogo: {
                    imgSrc: "../../../public/customersLogo/iecLogo.png",
                    imgAlt: "iec",
                  },
                  customerRecommend: {
                    text: `"ממשק הדוחות מאוד יעיל ונוח"`,
                    customerName: "תומאס",
                    customerPosition: "מנכ'ל ",
                  },
                },
                {
                  customerLogo: {
                    imgSrc: "../../../public/customersLogo/shabakLogo.png",
                    imgAlt: "Shabak",
                  },
                  customerRecommend: {
                    text: `"ניהול ושיבוץ סוכנים לא היה פשוט יותר"`,
                    customerName: "ד",
                    customerPosition: "חסוי",
                  },
                },
              ]}
            />
          </div>
        </div>
        <BannerContacts />
        <Footer />
      </div>
      <WhatsAppBtn />
    </>
  );
};

export default ProductsPage;
