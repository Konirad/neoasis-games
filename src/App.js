import { BrowserRouter, Route, Routes} from "react-router-dom";

//styles
import "../src/styles/partials/_global.scss";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//pages
import AboutPage from "./pages/About/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/Product/ProductPage";
import GamePage from "./pages/Game/GamePage";

function App() {
  return (
    <BrowserRouter>
      <div className="bodyContent">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/*<Route path="/game" element={<GamePage />} />*/}
          <Route path="/products" element={<ProductPage />} />
          <Route path="products/:gameAtHand" element={<GamePage />} />
        </Routes>
        <Footer className="tempo" />
      </div>
    </BrowserRouter>
  );
}

export default App;
