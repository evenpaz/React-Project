import { GoHome } from "react-icons/go";
import { FaCalendarCheck, FaUserTie } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { PiFilesFill } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import IconAndTextBtn from "../iconAndTextBtn/IconAndTextBtn";
import "./navbarApp.scss";
import ToggleBtn from "../toggleBtn/ToggleBtn";
import { useContext } from "react";
import { CostumersContext } from "../../context/CostumersProvider";

const NavbarApp = () => {
  const { state: companyData } = useContext(CostumersContext);
  return (
    <div id="navbar">
      <div className="navbar-right">
        <span className="navbar-right__logo">
          <Logo
            imgSrc={"../../../public/logo2.1.png"}
            imgAlt={"Easy Management Logo"}
            imgHeight={"50px"}
            imgWidth={"200px"}
          />
        </span>
        <span className="navbar-right__navbarBtn">
          <IconAndTextBtn
            iconAndTextBtnArr={[
              {
                linkTo: "/home",
                text: "בית",
                logoSrc: <GoHome color="var(--icon-color)" size="1.5em" />,
              },
              {
                linkTo: "/employees",
                text: "עובדים",

                logoSrc: <RiTeamFill color="var(--icon-color)" size="1.5em" />,
              },
              {
                linkTo: "/availability",
                text: "זמינות",

                logoSrc: (
                  <FaCalendarCheck color="var(--icon-color)" size="1.5em" />
                ),
              },
              {
                linkTo: "/rota",
                text: "סידור",
                logoSrc: <ImProfile color="var(--icon-color)" size="1.5em" />,
              },
              {
                linkTo: "/reports",
                text: "דוחות",
                logoSrc: <PiFilesFill color="var(--icon-color)" size="1.5em" />,
              },
            ]}
            flexDisplay="in_flex_row-reverse"
          />
        </span>
      </div>
      <div className="navbar-left">
        <Logo
          imgSrc={companyData.logo}
          imgAlt="תמונת חברה"
          imgWidth="100%"
          imgHeight="90%"
        />
        <ToggleBtn
          btnArr={[
            {
              id: "settings-btn",
              text: (
                <div className="settings-btn-details">
                  <p>
                    {companyData.employeeData.firstName}{" "}
                    {companyData.employeeData.lastName} ▿
                  </p>
                  <FaUserTie color="var(--icon-color)" size="1.5em" />
                </div>
              ),
              subList: (
                <ul id="settings-details">
                  {/* <li>
                    <Link to="">הפרופיל שלי</Link>
                  </li>
                  <li>
                    <Link to="">שינוי סיסמא</Link>
                  </li> */}
                  <li>
                    <Link to="/login">התנתק</Link>
                    {/* <button onClick={logout}>התנתק</button> */}
                  </li>
                </ul>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NavbarApp;
