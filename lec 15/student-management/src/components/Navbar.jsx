import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/add">Add Student</Link>
      <Link to="/api">API Data</Link>
    </nav>
  )
}

export default Navbar
