import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Mica Studio</h1>
      <nav className="header-nav">
        <NavLink to="/">Domov</NavLink>
        <NavLink to="/about">O nas</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  )
}
