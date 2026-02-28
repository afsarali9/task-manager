import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PublicOnlyLayout = () => {
  const user = useSelector((state) => state.auth.user)

  // If already logged in → kick out of public pages
  if (user) {
    return <Navigate to="/app" replace />
  }

  // Otherwise allow public pages (login)
  return <Outlet />
}

export default PublicOnlyLayout