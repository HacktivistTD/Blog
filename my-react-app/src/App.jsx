import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateArticle from "./components/CreateArticle";
import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/write-article" element={<CreateArticle />} />
            <Route path="/category/:category" element={<ArticleList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
