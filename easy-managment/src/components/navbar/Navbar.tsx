import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import "./navbar.scss";

type NavbarProps = {
  linksArr: { text: string; link: string }[];
};

const Navbar = ({ linksArr }: NavbarProps) => {
  return (
    <div className="navbar">
      <div className="navbar__logo-container">
        <Logo
          imgSrc={"../../../public/logo2.1.png"}
          imgAlt={"Easy Management Logo"}
          imgHeight={"80px"}
          imgWidth={"350px"}
        />
      </div>
      <div className="navbar__links">
        {linksArr.map((param) => {
          return <Link to={param.link}>{param.text}</Link>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
