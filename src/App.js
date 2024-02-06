import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/styles/partials/_global.scss";

import Header from "./components/Header/Header";

//pages
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
