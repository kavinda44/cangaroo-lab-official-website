
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "./Contact.css";
// import conT from "./Conimg.png"



// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_tv5qw74",
//         "template_zilucjg",
//         form.current,
//         "eNsEDafr4Ja2HZrBe"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="Container">
//          <div className="image-container">
//         <img className="con" src={conT} alt=""/>
//       </div>
       
//     <div className="wrapper2">
       
//       <div className="form-box">
//         <form ref={form} onSubmit={sendEmail}>
//           <h1>Contact Us</h1>
//           <div className="input-box">
//             <input type="text" name="to_name" placeholder="Name" />
//           </div>
//           <div className="input-box">
//             <input type="email" name="from_name" placeholder="Email" />
//           </div>
//           <div className="input-box">
//             <textarea  name="message" placeholder="Message" />
//           </div>
//           <button type="submit">Send</button>
//           <div className="register-link">
//             <p>
//               <a href="/">Back to Home</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import conT from "./Conimg.png";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.to_name.trim() === "") {
      tempErrors["to_name"] = "Name is required";
      isValid = false;
    }
    if (formData.from_name.trim() === "") {
      tempErrors["from_name"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_name)) {
      tempErrors["from_name"] = "Email is not valid";
      isValid = false;
    }
    if (formData.message.trim() === "") {
      tempErrors["message"] = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
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
            window.alert("Message sent successfully!");
            setFormData({ to_name: "", from_name: "", message: "" });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="Container">
      <div className="image-container">
        <img className="con" src={conT} alt="" />
      </div>

      <div className="wrapper2">
        <div className="form-box">
          <form ref={form} onSubmit={sendEmail}>
            <h1>Contact Us</h1>
            <div className="input-box">
              <input
                type="text"
                name="to_name"
                placeholder="Name"
                value={formData.to_name}
                onChange={handleChange}
              />
              {errors.to_name && <span className="error">{errors.to_name}</span>}
            </div>
            <div className="input-box">
              <input
                type="email"
                name="from_name"
                placeholder="Email"
                value={formData.from_name}
                onChange={handleChange}
              />
              {errors.from_name && (
                <span className="error">{errors.from_name}</span>
              )}
            </div>
            <div className="input-box">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
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

