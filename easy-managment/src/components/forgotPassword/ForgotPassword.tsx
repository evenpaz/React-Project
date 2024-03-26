import { FormEvent, useState } from "react";
import "./forgotPassword.scss";
import axios from "axios";

const ForgotPassword = () => {
  const [forgotPassData, setForgotPassData] = useState({
    companyNumber: 0,
    email: "",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setForgotPassData({
      ...forgotPassData,
      [name]: value,
    });
  };
  const handleForgotPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("forgotPassData.companyNumber:", forgotPassData.companyNumber);
    console.log("forgotPassData.email:", forgotPassData.email);

    try {
      const res = await axios.post(
        "http://localhost:4000/companies/api/forgot-password",
        {
          companyNumber: forgotPassData.companyNumber,
          email: forgotPassData.email,
        }
      );
      if (res.status == 200) {
        alert("ok");
      } else alert("bad combination");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="forgotPassWord-top-container">
        <h2>שכחתי פרטי זיהוי</h2>
      </div>
      <form className="forgotPassword-form" onSubmit={handleForgotPassword}>
        <input
          type="number"
          id="companyNumber"
          name="companyNumber"
          value={forgotPassData.companyNumber}
          onChange={handleInputChange}
          placeholder="companyNumber"
          required
        />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={forgotPassData.email}
          onChange={handleInputChange}
          placeholder="email"
          required
        />
        <br />
        <br />
        <input className="green-btn" type="submit" value="שלח פרטים במייל" />
      </form>
    </>
  );
};

export default ForgotPassword;
