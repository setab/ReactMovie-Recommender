import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorites";
import NavBar from "./components/NavBar";
import "./css/App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}
