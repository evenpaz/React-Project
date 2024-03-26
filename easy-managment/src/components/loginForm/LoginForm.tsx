import { FormEvent, useState } from "react";
import Logo from "../logo/Logo";
import "./loginForm.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ButtonMailto from "../buttonMailto/ButtonMailto";
import { supportEmail } from "../../assets/contacts/ContactsInfo";
import { MdOutlineMailOutline } from "react-icons/md";

export interface UserLoginData {
  userName: string;
  password: string;
  companyNumber: string;
}

type LoginFormProps = {
  onsubmit: (details: UserLoginData) => void;
};

const LoginForm = ({ onsubmit, showForgotPass, updateShowForgotPass }) => {
  const [showPass, setShowPass] = useState(false);
  const [loginData, setLoginData] = useState<UserLoginData>({
    companyNumber: "",
    userName: "",
    password: "",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      onsubmit(loginData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickForgotPass = (): boolean => {
    return updateShowForgotPass(showForgotPass);
  };

  return (
    <div className="loginForm">
      <div className="loginForm__title">
        <Link to={"/"}>
          <Logo
            imgSrc={"../../../public/logo2.1.png"}
            imgAlt={"Easy Management Logo"}
            imgHeight={"50px"}
            imgWidth={"250px"}
          />
        </Link>
      </div>
      <div className="loginForm__body">
        <form className="loginForm--body__form" onSubmit={handleLogin}>
          <input
            type="text"
            id="companyNumber"
            name="companyNumber"
            value={loginData.companyNumber}
            onChange={handleInputChange}
            placeholder="Company number"
            required
          />
          <br />
          <input
            type="text"
            id="userName"
            name="userName"
            value={loginData.userName}
            onChange={handleInputChange}
            placeholder="Username"
            required
          />
          <br />
          <span id="--form__password-line">
            <i
              id="showPassword"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? <FaEye size="1.5em" /> : <FaEyeSlash size="1.5em" />}
            </i>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </span>
          <br />
          <br />
          <button className="green-btn" type="submit">
            Login
          </button>
          <div className="loginForm--body--form__links">
            <p>
              By login you agree to our{" "}
              <HashLink className="hashLink" to={"/about-us/#privacy"} smooth>
                Privacy Policy{" "}
              </HashLink>
              and{" "}
              <HashLink className="hashLink" to={"/about-us/#terms"} smooth>
                Terms of Use
              </HashLink>
            </p>
            <p>
              Problems with login? <MdOutlineMailOutline size="1em" />{" "}
              <ButtonMailto
                mailto={`mailto:${supportEmail}`}
                label={supportEmail}
              />
            </p>
            <p
              id="openForgotPass-popup"
              onClick={() => handleClickForgotPass()}
            >
              Forgot you password?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
