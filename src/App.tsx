import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      {/* Full white background */}
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <Header />

        {/* Center content */}
        <main className="flex-grow flex justify-center mt-5 px-4">
          <div className="w-full max-w-5xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/:shortUrl" element={<Redirect />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
