import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Contact from "./component/contact/Contact";
import Demo from "./component/Demo";
import Header from "./component/Header";
import Home from "./component/Home";
import ProjectList from "./component/projectList/ProjectList";
import Toggle from "./component/toggle/Toggle";
import { ThemeContext } from "./context";
import SignInScreen from "./screen/SignInScreen";
import { signout } from "./actions/userAction";
import RegisterScreen from "./screen/RegisterScreen";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <>
        <div
          className="App"
          style={{
            backgroundColor: darkMode ? "#282425" : "white",
            color: darkMode && "white",
          }}
        >
          <header>
            <div>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name}
                    <i>
                      <FaCaretDown />
                    </i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </div>
            <Toggle />
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/project" element={<ProjectList />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/signin" exact element={<SignInScreen />}></Route>
              <Route
                path="/register"
                exact
                element={<RegisterScreen />}
              ></Route>
            </Routes>
          </main>

          <footer>
            <Demo />
          </footer>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
