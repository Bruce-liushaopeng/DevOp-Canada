import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Events from "./pages/Events";
import Home from "./pages/Home"
import About from "./pages/About";
import Blog from "./pages/Blog";
import EventDetailsPage from "./components/EventDetailsPage";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path='/events/:id' element={<EventDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
