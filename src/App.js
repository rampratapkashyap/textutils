import "./App.css";
import Navbar from "./components/Navbar";
//import TextForm from "./components/TextForm";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Switch>
        <Route path={"/"} exact>
          <Navbar title="TextUtils" abouttext="About" contacttext="Contact" />
        </Route>
        <Route path={"/about"}>
          <Navbar title="TextUtils" abouttext="About" contacttext="Contact" />
          <About />
        </Route>
        <Route path={"/contact"}>
          <Navbar title="TextUtils" abouttext="About" contacttext="Contact" />
          <Contact />
        </Route>
        <Route path={"/TextUtils"}>
          <Navbar title="TextUtils" abouttext="About" contacttext="Contact" />
          <TextForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
