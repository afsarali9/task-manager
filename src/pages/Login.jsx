import { useState } from "react"
import { useDispatch } from 'react-redux'
import { login } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs(prev => ({ ...prev, [name]: value }))
  }
  const userToStore = {
    name: inputs.name,
    email: inputs.email
  }
  const handleLogin = (e) => {
    e.preventDefault()
    if (inputs.name === '' || inputs.email === '' || inputs.password === '') return
    dispatch(login(inputs))
    localStorage.setItem("user", JSON.stringify(userToStore))
    setInputs({
      name: '',
      email: '',
      password: '',
    })
    navigate("/app")
  }
  return (
    <form onSubmit={handleLogin} className="flex flex-col justify-start w-full items-start">
      <input type="text" placeholder="Enter Name"
        className="outline-none border-solid border-black p-2 border-2 mb-3 w-full"
        name="name"
        value={inputs.name}
        onChange={handleChange}
      />
      <input type="email" placeholder="Enter Email"
        className="outline-none border-solid border-black p-2 border-2 mb-3 w-full"
        name="email"
        value={inputs.email}
        onChange={handleChange}
      />
      <input type="password" placeholder="Enter password"
        className="outline-none border-solid border-black p-2 border-2 mb-3 w-full"
        name="password"
        value={inputs.password}
        onChange={handleChange}
      />
      <button type="submit" className="bg-black text-white pt-2 pb-2 pl-4 pr-4 cursor-pointer">Login</button>
    </form>
  )
}

export default Login
