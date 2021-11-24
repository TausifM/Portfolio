import "./Home.css";
import Tausif01 from "../img/tausif.png";
import About from "./About/About";
import ProjectList from "./projectList/ProjectList";
import Contact from "./contact/Contact";
const Home = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">Tausif Sheikh</h1>
            <div className="i-tittle">
              <div className="i-tittle-wrapper">
                <div className="i-tittle-item">Web Developer</div>
                <div className="i-tittle-item">UI/UX Designer</div>
                <div className="i-tittle-item">Content Writer</div>
                <div className="i-tittle-item">MERN Stack Developer</div>
                <div className="i-tittle-item">Photographer</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develops websites for businesses and individuals. I
              did BE and having experience in Web development, UI/UX designing,
              and content writing. I also having interest in photography and I
              love to create beautiful images, by using PhotoShop.
            </p>
          </div>
          <svg
            width="75"
            height="75"
            fill="none"
            viewBox="0 0 79 130"
            className="i-scroll"
            stroke="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M50.2,121.63c6.71-1.85,12.72-5.44,17.51-10.23c7.19-7.19,11.65-17.11,11.65-28.03V39.68c0-10.92-4.46-20.84-11.65-28.03 C60.52,4.46,50.6,0,39.68,0C28.77,0,18.84,4.46,11.65,11.65C4.46,18.84,0,28.77,0,39.68v43.68c0,10.92,4.46,20.84,11.65,28.03 c5.59,5.59,12.82,9.53,20.89,11.01C37.42,123.3,45.7,122.87,50.2,121.63L50.2,121.63L50.2,121.63z M39.23,92.06 c4.15,0,7.55-3.4,7.55-7.55v-7.78c0-4.15-3.4-7.55-7.55-7.55c-4.15,0-7.55,3.4-7.55,7.55v7.78C31.68,88.66,35.07,92.06,39.23,92.06 L39.23,92.06z M61.08,104.77c-5.49,5.49-13.07,8.91-21.4,8.91c-8.33,0-15.9-3.41-21.4-8.91c-5.49-5.49-8.91-13.07-8.91-21.4V39.68 c0-8.33,3.41-15.9,8.91-21.4c5.49-5.49,13.07-8.91,21.4-8.91c8.33,0,15.9,3.41,21.4,8.91c5.49,5.49,8.91,13.07,8.91,21.4v43.68 C69.99,91.7,66.58,99.27,61.08,104.77L61.08,104.77L61.08,104.77z" />
            </g>
          </svg>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Tausif01} alt="" className="i-img" />
        </div>
      </div>
      <About />
      <ProjectList />
      <Contact />
    </>
  );
};

export default Home;
