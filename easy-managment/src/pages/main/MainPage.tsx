import { IoMdTime, IoIosHelpCircleOutline } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { GrCloudComputer, GrRestaurant } from "react-icons/gr";
import { GiSpeedometer, GiGears } from "react-icons/gi";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { TbCalendarUser, TbReportMoney } from "react-icons/tb";
import { PiFilesFill } from "react-icons/pi";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { RiCustomerService2Line, RiBankLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { ImBriefcase } from "react-icons/im";
import { LuBrainCircuit } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  lorem10,
  lorem20,
  lorem40,
  lorem5,
  readMoreHeb,
} from "../../assets/lorem/lorem";
import ContentBox from "../../components/contentBox/ContentBox";
import Header from "../../components/header/Header";
import ImgCarousel from "../../components/imgCarousel/ImgCarousel";
import Logo from "../../components/logo/Logo";
import BannerContactBtn from "../../components/bannerContactBtn/BannerContactBtn";
import Separator from "../../components/separator/Separator";
import "./mainPage.scss";
import Form_contact from "../../components/form_contact/Form_contact";
import QA_box from "../../components/qa_box/QA_box";
import CustomersCounters from "../../components/customersCounters/CustomersCounters";
import Footer from "../../components/footer/Footer";
import {
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
} from "../../assets/qa/QA";
import CustomersLogoBanner from "../../components/customersLogoBanner/CustomersLogoBanner";
import BannerContacts from "../../components/bannerContacts/BannerContacts";
import { HashLink } from "react-router-hash-link";
import ProductsAndServicesOptionsList from "../../components/productsAndServicesOptions-list/ProductsAndServicesOptions-list";
import LinkToContactPageBtn from "../../components/linkToContactPageBtn/LinkToContactPageBtn";
import WhatsAppBtn from "../../components/whatsAppBtn/WhatsAppBtn";

const MainPage = () => {
  return (
    <>
      <div className="mainPage">
        <div className="header-container">
          <Header />
        </div>
        <div className="middle-container">
          <div className="middle-container__img-carousel-container">
            <ImgCarousel
              text={
                <div id="img-carousel__text">
                  <p>Easy-Management התוכנה לניהול עובדים </p>
                  <LinkToContactPageBtn />
                </div>
              }
              imgArr={[
                {
                  imgSrc:
                    "https://www.shiftorganizer.com/wp-content/uploads/2017/07/service-banner3.jpg",
                  imgAlt: "carousel image 1",
                },
                {
                  imgSrc:
                    "https://www.shiftorganizer.com/wp-content/uploads/2017/03/main-banner.jpg",
                  imgAlt: "carousel image 2",
                },
                {
                  imgSrc:
                    "https://www.shiftorganizer.com/wp-content/uploads/2017/05/banner-image.jpg",
                  imgAlt: "carousel image 3",
                },
                {
                  imgSrc:
                    "https://www.shiftorganizer.com/wp-content/uploads/2019/01/calc.jpg",
                  imgAlt: "carousel image 4",
                },
              ]}
              imgHeight={"480px"}
              imgWidth={"100%"}
            />
          </div>
          <ContentBox
            containerClassName="rectangular_border"
            containerTitle="הפתרון המלא לסידור עבודה בעסקים"
            contentBox={[
              {
                icon: (
                  <Logo
                    imgSrc={"../../../public/logo2.1.png"}
                    imgAlt={"logo"}
                    imgHeight="70"
                    imgWidth="250"
                  />
                ),
                text: lorem40,
                link: (
                  <HashLink to={"about-us/#aboutUsPage"} smooth>
                    {readMoreHeb}
                  </HashLink>
                ),
              },
              {
                icon: <ImProfile size="3em" color="#26c2ce" />,
                title: "סידור עבודה",
                hr: <Separator />,
                text: lorem20,
                link: (
                  <HashLink to={"/products/#schedulingSoftware"} smooth>
                    {readMoreHeb}
                  </HashLink>
                ),
              },
              {
                icon: <IoMdTime size="3em" color="#26c2ce" />,
                title: "שעון נוכחות",
                hr: <Separator />,
                text: lorem10,
                link: (
                  <HashLink to={"/products/#timeClock"} smooth>
                    {readMoreHeb}
                  </HashLink>
                ),
              },
            ]}
          />
          <BannerContactBtn />
          <ContentBox
            containerClassName="circular_border"
            contentBox={[
              {
                icon: <GrCloudComputer size="4em" />,
                title: "פתרונות ניהול עובדים באונליין",
                hr: <hr />,
              },
              {
                icon: <GiSpeedometer size="4em" />,
                title: "שיבוץ אוטומטי חכם ומהיר",
                hr: <hr />,
              },
              {
                icon: <IoFileTrayStackedOutline size="4em" />,
                title: "מערכת דוחות מתקדמת",
                hr: <hr />,
              },
              {
                icon: <GiGears size="4em" />,
                title: "התאמה מלאה לצורכי הארגון",
              },
            ]}
          />
          <ProductsAndServicesOptionsList />
          <ContentBox
            containerClassName="without_border"
            containerTitle="שירותים נוספים"
            contentBox={[
              {
                icon: (
                  <AiOutlineUserSwitch
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "החלפת עובדים",
                text: lorem10,
                link: (
                  <Link to="/products/#employeesChange">{readMoreHeb}</Link>
                ),
              },
              {
                icon: (
                  <TbCalendarUser
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "חופשות",
                text: lorem10,
                link: <Link to="/products/#holidays">{readMoreHeb}</Link>,
              },
              {
                icon: (
                  <GrRestaurant size="3em" color="var(--tertiary-text-color)" />
                ),
                title: "טיפים למסעדות",
                text: lorem20,
                link: (
                  <Link to="/products/#tipsForRestaurants">{readMoreHeb}</Link>
                ),
              },
              {
                icon: (
                  <PiFilesFill size="3em" color="var(--tertiary-text-color)" />
                ),
                title: "דוחות וסטטיסטיקות",
                text: lorem10,
                link: (
                  <Link to="/products/#reportsAndStatistics">
                    {readMoreHeb}
                  </Link>
                ),
              },
              {
                icon: (
                  <TbReportMoney
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "ממשק למערכות שכר",
                text: lorem10,
                link: <Link to="/products/#payrollSystems">{readMoreHeb}</Link>,
              },
              {
                icon: (
                  <IoIosHelpCircleOutline
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "תמיכה והטמעה",
                text: lorem5,
                link: (
                  <Link to="/products/#supportAndImplementation">
                    {readMoreHeb}
                  </Link>
                ),
              },
            ]}
            hr={<hr />}
          />
          <div className="qa_and_formContact_box" id="qa-section">
            <Form_contact title="יצירת קשר" />
            <QA_box
              title="שאלות ותשובות"
              questions_box={[
                { question: Q1, answer: A1 },
                { question: Q2, answer: A2 },
                { question: Q3, answer: A3 },
                { question: Q4, answer: A4 },
                { question: Q5, answer: A5 },
                { question: Q6, answer: A6 },
                { question: Q7, answer: A7 },
                { question: Q8, answer: A8 },
              ]}
            />
          </div>
          <CustomersCounters
            counters={[
              {
                title: "סידורי עבודה",
                num: Math.floor(Math.random() * 10000000),
              },
              { title: "לקוחות", num: Math.floor(Math.random() * 100000) },
              { title: "יוזרים", num: Math.floor(Math.random() * 10000000) },
              { title: "דוחות", num: Math.floor(Math.random() * 1000000) },
            ]}
          />
          <ContentBox
            id="customers-type"
            containerTitle="התאמה לכל סוגי העסקים"
            containerClassName="without_border icon_and_title"
            contentBox={[
              {
                icon: (
                  <GrRestaurant size="3em" color="var(--tertiary-text-color)" />
                ),
                title: "מסעדות וקייטרינג",
                hr: <hr />,
              },
              {
                icon: (
                  <MdOutlineMonitorHeart
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "מוסדות בריאות",
                hr: <hr />,
              },
              {
                icon: <FaStore size="3em" color="var(--tertiary-text-color)" />,
                title: "רשתות וחנויות",
                hr: <hr />,
              },
              {
                icon: (
                  <RiCustomerService2Line
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "מרכזי שירות",
              },
              {
                icon: (
                  <GoShieldCheck
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "חברות שמירה",
                hr: <hr />,
              },
              {
                icon: (
                  <ImBriefcase size="3em" color="var(--tertiary-text-color)" />
                ),
                title: "בנקים וביטוח",
                hr: <hr />,
              },
              {
                icon: (
                  <RiBankLine size="3em" color="var(--tertiary-text-color)" />
                ),
                title: "עיריות",
                hr: <hr />,
              },
              {
                icon: (
                  <LuBrainCircuit
                    size="3em"
                    color="var(--tertiary-text-color)"
                  />
                ),
                title: "הייטק",
              },
            ]}
          />
          <CustomersLogoBanner
            id="customers-list"
            title="מבין לקוחותינו"
            imgArr={[
              {
                imgSrc: "../../../public/customersLogo/apoalimBankLogo.png",
                imgAlt: "Apoalim",
              },
              {
                imgSrc: "../../../public/customersLogo/bbbLogo.png",
                imgAlt: "BBB",
              },
              {
                imgSrc: "../../../public/customersLogo/castroLogo.png",
                imgAlt: "Castro",
              },
              {
                imgSrc: "../../../public/customersLogo/escroomLogo.png",
                imgAlt: "EscapeRoom",
              },
              {
                imgSrc: "../../../public/customersLogo/iecLogo.png",
                imgAlt: "iec",
              },
              {
                imgSrc: "../../../public/customersLogo/shabakLogo.png",
                imgAlt: "Shabak",
              },
              {
                imgSrc: "../../../public/customersLogo/team3Logo.jpeg",
                imgAlt: "Team-3",
              },
              {
                imgSrc: "../../../public/customersLogo/yesLogo.png",
                imgAlt: "Yes",
              },
            ]}
          />
          <BannerContacts />
        </div>
        <Footer />
      </div>
      <WhatsAppBtn />
    </>
  );
};

export default MainPage;
