import "./contact.css";
import Phone from "../../img/phone icon.png";
import Email from "../../img/email.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import validator from "validator";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [emailError, setEmailError] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_omq0bnl",
        "template_uw5njek",
        formRef.current,
        "user_WdCiEkddvzBr8fNwOeI1W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          alert("Thank You, For Contacting");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("Email is valid");
    } else {
      setEmailError("Please enter a valid email");
    }
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-tittle">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 - 99757 67561
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              Email:
              <a href="mailto:heytausifsheikh@gmail.com">
                heytausifsheikh@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b style={{ fontSize: "18px" }}>What's your story?</b>
            <br />
            Get in touch. Always ready to help for your project.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required={true}
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              required={true}
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <input
              type="text"
              id="userEmail"
              placeholder="Email"
              onChange={(e) => validateEmail(e)}
              required={true}
              style={{ backgroundColor: darkMode && "#333" }}
            ></input>
            <br />
            <span
              style={{
                fontWeight: "500",
                color: "red",
                fontFamily: "Poppins",
              }}
            >
              {emailError}
            </span>
            <input
              type="text"
              placeholder="Mobile number"
              name="user_mobile"
              required={true}
              style={{ backgroundColor: darkMode && "#333" }}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required={true}
              style={{ backgroundColor: darkMode && "#333", height: "25vh" }}
            ></textarea>
            <button type="submit" value="Send">
              Send
            </button>
            {done}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
