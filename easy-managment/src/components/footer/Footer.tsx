import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { copyrights } from "../../assets/lorem/lorem";
import Logo from "../logo/Logo";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top__link-lists">
          <ul>
            <li>
              <p>דף הבית</p>
            </li>
            <li>
              <HashLink
                className="hashLink"
                to="/#product-types-section"
                smooth
              >
                מסלולים
              </HashLink>
            </li>
            <li>
              <HashLink className="hashLink" to={"/#qa-section"} smooth>
                שאלות ותשובות
              </HashLink>
            </li>
            <li>
              <HashLink className="hashLink" to={"/#customers-type"} smooth>
                למי מתאים?
              </HashLink>
            </li>
            <li>
              <HashLink className="hashLink" to={"/#customers-list"} smooth>
                לקוחות ממליצים
              </HashLink>
            </li>
          </ul>
          <ul>
            <li>
              <p>מוצרים</p>
            </li>
            <li>
              <HashLink
                className="hashLink"
                to="/products/#schedulingSoftware"
                smooth
              >
                תוכנת סידור עבודה
              </HashLink>
            </li>
            <li>
              <HashLink className="hashLink" to="/products/#timeClock" smooth>
                שעון נוכחות
              </HashLink>
            </li>
          </ul>
          <ul>
            <li>
              <p>שירותים</p>
            </li>
            <li>
              <HashLink
                className="hashLink"
                to="/products/#reportsAndStatistics"
                smooth
              >
                דוחות וסטטיסטיקות
              </HashLink>
            </li>
            <li>
              <HashLink
                className="hashLink"
                to="/products/#employeesChange"
                smooth
              >
                החלפות
              </HashLink>
            </li>
            <li>
              <HashLink className="hashLink" to="/products/#holidays" smooth>
                חופשות
              </HashLink>
            </li>
          </ul>
          <ul>
            <li>
              <p>צור קשר</p>
            </li>
            <li>
              <HashLink
                className="hashLink"
                to="/contacts/#contactsPage"
                smooth
              >
                תמיכה
              </HashLink>
            </li>
            <li>
              <HashLink
                className="hashLink"
                to="/contacts/#contactsPage"
                smooth
              >
                מכירות
              </HashLink>
            </li>
            <li>
              <HashLink
                className="hashLink"
                to="/contacts/#contactsPage"
                smooth
              >
                כספים
              </HashLink>
            </li>
            <li>
              <HashLink className="hashLink" to={"/about-us/#privacy"} smooth>
                מדיניות פרטיות
              </HashLink>
            </li>
            <li>
              <HashLink className="hashLink" to={"/about-us/#terms"} smooth>
                תנאי שימוש
              </HashLink>
            </li>
          </ul>
        </div>
        <span className="footer-top__logo">
          <Logo
            imgSrc={"../../../public/logo2.1.png"}
            imgAlt={"Easy Management Logo"}
            imgHeight={"50px"}
            imgWidth={"200x"}
          />
        </span>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom__social-network-links">
          <Link
            className="social-network-link"
            to="https://www.facebook.com/Easy-managment1/"
          >
            <FaFacebookF size="2em" color="var(--primary-text-color)" />
          </Link>
          <Link
            className="social-network-link"
            to="https://twitter.com/Easy-manegment1/"
          >
            <FaXTwitter size="2em" color="var(--primary-text-color)" />
          </Link>
          <Link
            className="social-network-link"
            to="https://instagram.com/Easy-manegment1/"
          >
            <FaInstagram size="2em" color="var(--primary-text-color)" />
          </Link>
          <Link
            className="social-network-link"
            to="https://linkedin.com/Easy-manegment1/"
          >
            <FaLinkedinIn size="2em" color="var(--primary-text-color)" />
          </Link>
          <Link
            className="social-network-link"
            to="https://youtube.com/Easy-manegment1/"
          >
            <TfiYoutube size="2em" color="var(--primary-text-color)" />
          </Link>
        </div>
        <div className="footer-bottom__copyrights">
          <p>{copyrights}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
