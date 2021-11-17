import "./about.css";
import Degree from "../../img/polytechnic.png";
import Experience from "../../img/experience.png";
import Designer from "../../img/designer.png";
const About = () => {
  return (
    <>
      <div className="a" id="#about">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://res.cloudinary.com/dakqa9krs/image/upload/v1636790428/my-photo/pexels-pixabay-39284-min_obmmkh.jpg"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <div className="a-tittle">About Me</div>
          <p className="a-sub">
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="a-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            assumenda labore. Rerum commodi incidunt pariatur obcaecati nisi
            iure voluptatem provident.
          </p>
          <div className="a-award">
            <img src={Degree} alt="" className="a-award-img" />
            <div className="a-award-text">
              <h4 className="a-award-tittle">Engineering Degree</h4>
            </div>
            <img src={Experience} alt="" className="a-award-img" />
            <div className="a-award-text">
              <h4 className="a-award-tittle">Experience Professional</h4>
            </div>
            <img src={Designer} alt="" className="a-award-img" />
            <div className="a-award-text">
              <h4 className="a-award-tittle">MERN Stack Developer</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
