import { contactHeb } from "../../assets/lorem/lorem";
import { Link } from "react-router-dom";
import "./linkToContactPageBtn.scss";

const LinkToContactPageBtn = () => {
  return (
    <button
      className="green-btn"
      onClick={() => {
        console.log("clicked");
      }}
    >
      <Link to={"/contacts"}>{contactHeb}</Link>
    </button>
  );
};

export default LinkToContactPageBtn;
