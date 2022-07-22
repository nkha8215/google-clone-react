import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/search" element={<h1>This is the search page</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
