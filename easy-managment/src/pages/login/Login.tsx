import { useContext, useState } from "react";
import LoginForm, { UserLoginData } from "../../components/loginForm/LoginForm";
import "./login.scss";
import ForgotPassword from "../../components/forgotPassword/ForgotPassword";
import axios from "axios";
// import { CostumersContext } from "../../context/CostumersProvider";

const Login = () => {
  // const { state: companyData, dispatch: setCompanyData } =
  // useContext(CostumersContext);
  const [showForgotPass, setShowForgotPass] = useState(Boolean(false));

  const updateShowForgotPass = () => {
    setShowForgotPass(!showForgotPass);
  };

  const handleSubmit = async (data: UserLoginData) => {
    try {
      const res = await axios.post("http://localhost:4000/companies/login", {
        companyNumber: data.companyNumber,
        userName: data.userName,
        password: data.password,
      });
      if (res.status == 200) {
        // const accessToken = res.data?.accessToken;
        // const refreshToken = res.data?.refreshToken;
        // window.localStorage.setItem("accessToken", accessToken);
        // window.localStorage.setItem("refreshToken", refreshToken);
        // dispatchAuthContext(getUserDataFromToken(accessToken));
        window.location.replace("http://localhost:5173/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginPage">
      <div className={"forgotPass-container-" + showForgotPass}>
        <button onClick={() => updateShowForgotPass()}>X</button>
        <ForgotPassword />
      </div>
      <LoginForm
        showForgotPass={showForgotPass}
        updateShowForgotPass={updateShowForgotPass}
        onsubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
