import "./form_contact.scss";
import "../linkToContactPageBtn/linkToContactPageBtn.scss";
import React, { FormEvent, useState } from "react";

type Form_contactType = {
  title?: string;
};

const Form_contact = ({ title }: Form_contactType) => {
  const [msg, setMsg] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    textMsg: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setMsg({
      ...msg,
      [name]: value,
    });
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setMsg({
      ...msg,
      [name]: value,
    });
  };

  const handleSendMsg = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("msg", msg);
    console.log("msg.email", msg.email);

    try {
      const data = new FormData();
      data.append("fullName", msg.fullName);
      data.append("phone", msg.phone);
      data.append("email", msg.email);
      data.append("subject", msg.subject);
      data.append("textMsg", msg.textMsg);

      fetch("http://localhost:4000/admin/send-msg-to-email", {
        method: "POST",
        body: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="formContact">
        <h1>{title}</h1>
        <form className="formContact__form" onSubmit={handleSendMsg}>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="שם מלא"
            value={msg.fullName}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={msg.phone}
            onChange={handleInputChange}
            placeholder="טלפון"
          />
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="אימייל"
            value={msg.email}
            onChange={handleInputChange}
            required
          />
          <br />

          <select
            name="subject"
            id="subject"
            value={msg.subject}
            onChange={handleInputChange}
          >
            <option value="contactSubject">נושא הפנייה</option>
            <option value="join">הצטרפות</option>
            <option value="help">עזרה</option>
            <option value="other">אחר</option>
          </select>
          <br />

          <textarea
            id="textMsg"
            name="textMsg"
            placeholder="הודעה"
            value={msg.textMsg}
            onChange={handleTextareaChange}
            required
          />
          <br />
          <br />
          <button className="green-btn" type="submit">
            שלח
          </button>
        </form>
      </div>
    </>
  );
};

export default Form_contact;
