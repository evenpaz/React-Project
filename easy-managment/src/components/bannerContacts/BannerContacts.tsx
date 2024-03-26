import "./bannerContacts.scss";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const BannerContacts = () => {
  return (
    <div className="bannerContacts">
      <div className="innerBox">
        <MdLocationPin size="2.2em" />
        <div className="text">
          <p>:כתובת</p>
          <p>ביחד ננצח 710, באר שבע</p>
        </div>
      </div>
      <div className="innerBox">
        <FaPhone size="2.2em" />
        <div className="text">
          <p>:טלפון</p>
          <p>050-123456</p>
        </div>
      </div>
      <div className="innerBox">
        <MdOutlineMailOutline size="2.2em" />
        <div className="text">
          <p>:אימייל</p>
          <p>support@easy-management.com</p>
        </div>
      </div>
    </div>
  );
};

export default BannerContacts;
