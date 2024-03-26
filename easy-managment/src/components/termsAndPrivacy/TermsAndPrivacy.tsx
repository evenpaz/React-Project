import { IoIosPaper } from "react-icons/io";

import "./termsAndPrivacy.scss";
import { lorem10, lorem20, lorem40 } from "../../assets/lorem/lorem";

const TermsAndPrivacy = () => {
  return (
    <div className="termsAndPrivacy-box">
      <div id="terms">
        <div className="title-box">
          <IoIosPaper size="2em" color="var(--quaternary-text-color)" />
          <h1>תנאי שימוש</h1>
        </div>
        <h2>1. כללי</h2>
        <p>{lorem40}</p>
        <h2>2. כלל ההסכם</h2>
        <p>{lorem10}</p>
        <h2>3. שינוי ועדכונים</h2>
        <p>{lorem10}</p>
        <h2>4. תיאור השירות</h2>
        <p>{lorem20}</p>
      </div>
      <div id="privacy">
        <div className="title-box">
          <IoIosPaper size="2em" color="var(--quaternary-text-color)" />
          <h1>מדיניות פרטיות</h1>
        </div>
        <h2>1. כללי</h2>
        <p>{lorem40}</p>
        <h2>2. מאגר המידע והשימוש בו</h2>
        <p>{lorem10}</p>
        <h2>3. מסירת מידע לצד שלישי</h2>
        <p>{lorem10}</p>
        <h2>4. שימוש ב Cookies</h2>
        <p>{lorem20}</p>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
