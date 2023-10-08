import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormBuilder from './pages/FormBuilder';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-builder" element={<FormBuilder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
