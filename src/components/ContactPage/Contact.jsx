
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import conT from "./Conimg.png"



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tv5qw74",
        "template_zilucjg",
        form.current,
        "eNsEDafr4Ja2HZrBe"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Container">
         <div className="image-container">
        <img className="con" src={conT} alt=""/>
      </div>
       
    <div className="wrapper2">
       
      <div className="form-box">
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <div className="input-box">
            <input type="text" name="to_name" placeholder="Name" />
          </div>
          <div className="input-box">
            <input type="email" name="from_name" placeholder="Email" />
          </div>
          <div className="input-box">
            <textarea  name="message" placeholder="Message" />
          </div>
          <button type="submit">Send</button>
          <div className="register-link">
            <p>
              <a href="/">Back to Home</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
