import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/nav';
import Home from "./pages/home";
import AdditionalContentExample from './components/alert';

function App() {
  return (
    <Router>
      <NavComponent />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
