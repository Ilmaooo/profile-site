import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Template from "./pages/Template";
import CVForm from "./pages/CVForm";
import NewCv from "./pages/NewCv";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/add-cv-data" element={<CVForm />} />
        <Route path="/add-cv-data/:id" element={<NewCv />} />
      </Routes>
    </Router>
  );
}

export default App;
