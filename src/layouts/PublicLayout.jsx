import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
  return (
    <main className="bg-[#e9dff8] h-screen w-full pt-8">
      <div className="bg-white w-[90%] sm:w-[70%]  md:w-[50%] lg:w-[40%] m-auto flex justify-center p-5 rounded-lg">
        <Outlet />
      </div>
    </main>
  )
}