import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-[#6904ff] pt-2 pb-2 pl-5 pr-5 text-white navigation">
      <NavLink to='/app' end className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
      <NavLink to='/app/task' className={({ isActive }) => isActive ? 'active' : ''}>Tasks</NavLink>
      <NavLink to='/app/profile' className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
      <NavLink to='/app/setting' className={({ isActive }) => isActive ? 'active' : ''}>Settings</NavLink>
    </nav>
  )
}

export default Navbar
