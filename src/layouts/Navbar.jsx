import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { logout } from "../features/auth/authSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('user')
  }
  return (
    <nav className="bg-[#6904ff] pt-2 pb-2 pl-5 pr-5 text-white navigation flex justify-between items-center">
      <div>
        <NavLink to='/app' end className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        <NavLink to='/app/task' className={({ isActive }) => isActive ? 'active' : ''}>Tasks</NavLink>
        <NavLink to='/app/profile' className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
        <NavLink to='/app/setting' className={({ isActive }) => isActive ? 'active' : ''}>Settings</NavLink>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}

export default Navbar
