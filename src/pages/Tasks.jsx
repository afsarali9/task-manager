import { lazy, Suspense, useState } from "react"
// import Button from "../components/Button"
import { addTask } from "../features/todo/todoSlice"
import { useDispatch, useSelector } from 'react-redux'

const Button = lazy(() => import("../components/Button"))

const Tasks = () => {
  const [input, setInput] = useState('')
  const [repeat, setRepeat] = useState(false)
  const [success, setSuccess] = useState(false)
  const [empty, setEmpty] = useState(false)
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo)

  const tempFlag = (setter) => {
    setter(true)
    setTimeout(() => setter(false), 2000)
  }

  const handleAdd = () => {
    const trim = input.trim()
    if (!trim) {
      tempFlag(setEmpty)
      return
    }

    const duplicate = todos.some(item => item.task.toLowerCase() === trim.toLowerCase())
    if (duplicate) {
      tempFlag(setRepeat)
      setInput('')
      return
    }

    dispatch(addTask(trim))
    setInput('')
    setRepeat(false)
    tempFlag(setSuccess)
  }



  let placeholder = "Enter Task"
  if (empty) placeholder = "Task cannot be empty"
  else if (repeat) placeholder = "Task already in the list"

  return (
    <div className="flex justify-between w-[50%] m-auto mt-5">
      {
        success && <p className="fixed top-12 right-2 bg-green-600 rounded-lg text-white pt-3 pb-3 pl-4 pr-4">Task Successfully added!</p>
      }
      <div className="w-[65%]">
        <input
          type="text"
          placeholder={placeholder}
          className={`bg-white p-3 border-solid border-2 border-blue-800 outline-none w-full ${repeat || empty ? 'border-red-500' : ''}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="w-[33%] bg-blue-950 text-white cursor-pointer flex items-center justify-items-center">
        <Suspense fallback={<p>Button Loading</p>}>
          <Button name='Add Task' onClick={handleAdd} />
        </Suspense>
      </div>

    </div>
  )
}

export default Tasks
