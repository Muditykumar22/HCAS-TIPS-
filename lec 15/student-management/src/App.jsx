import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import ApiStudents from './pages/ApiStudents'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/api" element={<ApiStudents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
