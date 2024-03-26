import { Link } from "react-router-dom";
import "./app_adminLogin.scss";
import Logo from "../../components/logo/Logo";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FormEvent, useState } from "react";
import axios from "axios";

const App_adminLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const [loginData, setLoginData] = useState({
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

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/admin/login", {
        userName: loginData.userName,
        password: loginData.password,
      });
      if (res.status == 200) {
        window.location.replace("http://localhost:5173/admin-page");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
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
                {showPass ? (
                  <FaEye size="1.5em" />
                ) : (
                  <FaEyeSlash size="1.5em" />
                )}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default App_adminLogin;
