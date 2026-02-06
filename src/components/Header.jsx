import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Pottery Studio</h1>
      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
