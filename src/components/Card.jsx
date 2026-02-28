import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import { isComplete, removeTask } from "../features/todo/todoSlice"
import { useState } from "react"

const Card = () => {
  const [error, setError] = useState(false)
  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    const task = todos.find(item => item.id === id)
    if (task.complete) {
      setError(true)
      setTimeout(() => setError(false), 2000)
      return
    }
    dispatch(removeTask(id))
  }

  return (
    <div>
      {
        error && <p className="fixed right-2 top-12 bg-green-500 rounded-sm text-white px-6 py-3">Completed task could not be deleted</p>
      }
      {
        todos.length > 0 ? (
          todos.map(({ id, task, complete }) =>
            <div key={id} className="w-full flex justify-between items-center pb-2 pt-2 border-b border-black">
              <div className={`w-[70%] ${complete ? 'line-through' : ''}`}>{task}</div>
              <div className="flex justify-between items-center w-[30%]">
                <div className="w-[45%]">
                  <Button name={complete ? 'Completed' : 'Incomplete'} className="bg-black text-white px-4 py-2" onClick={() => dispatch(isComplete(id))} />
                </div>
                <div className="w-[45%]">
                  <Button name='Delete' className='bg-red-500 text-white px-4 py-2' onClick={() => handleDelete(id)} />
                </div>
              </div>
            </div>
          )
        ) : 'No Task There'
      }
    </div>
  )
}
export default Card