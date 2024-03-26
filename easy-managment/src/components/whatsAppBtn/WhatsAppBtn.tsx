import { Link } from "react-router-dom";
import "./whatsAppBtn.scss";

// const whatsAppLink: string = "https://wa.me/<your phone number>";

const WhatsAppBtn = () => {
  return (
    <div className="chatBox-container">
      <Link className="WhatsAppBtn" to={whatsAppLink} target="_blank">
        <img
          src="../../../public/whatsApp-icon.png"
          width="80px"
          alt="chat in whatsApp"
        />
      </Link>
    </div>
  );
};

export default WhatsAppBtn;
