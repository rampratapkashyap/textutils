import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttext="About" contacttext="Contact" />

      <div className="container my-3">
        <TextForm heading="Enter the text " />
      </div>
    </>
  );
}

export default App;
