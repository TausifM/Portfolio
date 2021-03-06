import "./productList.css";
import Project from "../project/Project";
import { projects } from "../../data";
const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-tittle">Create & inspire. It's Tausif</h1>
        <p className="pl-desc">
          Take a look at our projects and motivate us to create more.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
