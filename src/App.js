import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/connect" element={<h1>Connect</h1>} />
      </Routes>
    </div>
  );
}
