import { FaLock } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./header_top.scss";

const Header_top = () => {
  return (
    <div className="header_top">
      <Link className="header_top__login-link" to={"/login"}>
        <p>התחברות</p>
        <FaLock size={"15px"} />
      </Link>
      <div className="header_top__phone-num">
        <p>טלפון: 050-123456</p>
        <FaMobileAlt size={"17px"} />
      </div>
    </div>
  );
};

export default Header_top;
