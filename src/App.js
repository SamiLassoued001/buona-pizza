import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
