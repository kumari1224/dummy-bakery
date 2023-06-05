import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
