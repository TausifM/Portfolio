import { useContext } from "react";
import "./App.css";
import About from "./component/About/About";
import Contact from "./component/contact/Contact";
import Demo from "./component/Demo";
import Header from "./component/Header";
import Home from "./component/Home";
import ProjectList from "./component/projectList/ProjectList";
import Toggle from "./component/toggle/Toggle";
import { ThemeContext } from "./context";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#282425" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Header />
      <Home />
      <About />
      <ProjectList />
      <Contact />
      <Demo />
    </div>
  );
}

export default App;
