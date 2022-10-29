import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from './components/about/About'
import Header from "./components/banner/Header";
import Login from "./components/Registration/Login";
import Page404 from "./components/page404/Page404";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
     <Route path="/" element={ <Home /> } />
     <Route path="/about" element={ <About /> } />
     <Route path="/login" element={ <Login /> } />
     <Route path="*" element={ <Page404 /> } />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
