import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Steam from './pages/Steam'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steam" element={<Steam />} />
      </Routes>
    </Router>
  )
}

export default App
