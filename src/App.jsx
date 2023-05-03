import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Events from "./pages/events";

function App() {
  console.log("app is rendered");
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
