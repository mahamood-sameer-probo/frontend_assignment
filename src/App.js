import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
