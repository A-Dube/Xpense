import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Navbar/Home";
import Support from "./Components/Navbar/Support";
import Exptrck from "./Components/Features/Exptrck";
import Analytics from "./Components/Features/Analytics";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/tracker" element={<Exptrck />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
