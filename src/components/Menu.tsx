
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
   <nav className='navbar navbar-expand-lg navbar-light bg-blue-800'>
    <NavLink className="navbar-brand"  to='/'>Home</NavLink>
    <div>

    <NavLink className='nav-link' to='/test'>Test</NavLink>
    </div>
   </nav>
  )
}
