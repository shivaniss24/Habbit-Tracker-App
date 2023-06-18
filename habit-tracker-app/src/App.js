import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Archived from "./components/Archived"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archived" element={<Archived />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
