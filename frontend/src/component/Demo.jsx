import "./demo.scss";
import { FaFacebookF, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context";
const Demo = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="f" style={{ backgroundColor: darkMode && "olive" }}>
      <div className="container">
        <div className="product">
          <div className="effect-1"></div>
          <div className="effect-2"></div>
          <div className="content">
            <div className="exercise">
              <a
                href="https://www.facebook.com/tcssuggest"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaFacebookF />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="effect-1"></div>
          <div className="effect-2"></div>
          <div className="content">
            <div className="sleep">
              <a
                href="https://twitter.com/TAUSIFMUKTAR"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaTwitter />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="effect-1"></div>
          <div className="effect-2"></div>
          <div className="content">
            <div className="sleep">
              <a
                href="https://www.linkedin.com/in/tausif-sheikh-8b4117bb/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="effect-1"></div>
          <div className="effect-2"></div>
          <div className="content">
            <div className="sleep">
              <a
                href="https://github.com/TausifM"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FaGithub />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="f-contain">
        <div className="f-contain-wrapper">
          <h3>Contact</h3>
          <br />
          <p>+91 - 99757 67561</p>
          <h3>Email</h3>
          <br />
          <p>heytausifsheikh@gmail.com</p>
        </div>
      </div>
      <div className="f-copy">
        <div className="f-copy-wraper">
          <h5 style={{ color: "brown" }}>Made with ♥ Tausif Sheikh</h5>
        </div>
      </div>
    </div>
  );
};

export default Demo;
