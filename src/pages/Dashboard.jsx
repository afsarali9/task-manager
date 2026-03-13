import { lazy, Suspense, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { isComplete, removeTask, editTask } from "../features/todo/todoSlice"
// import Card from "../components/Card"
// import Modal from "../components/Modal"

const Modal = lazy(() => import("../components/Modal"))

const Card = lazy(() => import("../components/Card"))

const ITEMS_PER_PAGE = 6

const Dashboard = () => {
  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState("all")
  const [error, setError] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState(null)

  // ✅ delete handler with rule
  const handleDelete = (todo) => {
    if (todo.complete) {
      setError(true)
      setTimeout(() => setError(false), 2000)
      return
    }
    dispatch(removeTask(todo.id))
  }

  // ✅ filter first
  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.complete
    if (filter === "incomplete") return !todo.complete
    return true
  })

  const openModal = (todo) => {
    setSelectedTodo(todo)
    setIsModal(true)
  }

  // ✅ pagination math
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedTodos = filteredTodos.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredTodos.length / ITEMS_PER_PAGE)

  // ✅ reset page when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  // ✅ safety: page overflow
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1)
    }
  }, [currentPage, totalPages])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      {
        isModal && selectedTodo && <Suspense fallback={<p>Loading modal...</p>}>
          <Modal
            modal={setIsModal}
            todo={selectedTodo}
            onUpdate={(newValue) => {
              dispatch(editTask({ id: selectedTodo.id, task: newValue }))
              setIsModal(false)
              setSelectedTodo(null)
            }}
          />
        </Suspense>
      }

      <div className="w-[90%] m-auto mt-5">

        {/* error message */}
        {error && (
          <p className="fixed right-2 top-12 bg-green-500 rounded-sm text-white px-6 py-3">
            Completed task could not be deleted
          </p>
        )}

        {/* filter dropdown */}
        <div className="mb-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-3 py-2"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>

        {/* tasks */}
        <Suspense fallback={<p>Loading...</p>}>
          {paginatedTodos.length > 0 ? (
            paginatedTodos.map(todo => (

              <Card
                key={todo.id}
                task={todo.task}
                complete={todo.complete}
                onToggle={() => dispatch(isComplete(todo.id))}
                onDelete={() => handleDelete(todo)}
                openModal={() => openModal(todo)}
              />

            ))
          ) : (
            <p>No Task There</p>
          )}
        </Suspense>
        {/* pagination */}
        {totalPages > 1 && (
          <div className="flex gap-2 justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border ${currentPage === page ? "bg-black text-white" : ""
                    }`}
                >
                  {page}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Dashboard