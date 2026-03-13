import { lazy, Suspense } from "react"

// import Button from "./Button"
const Button = lazy(() => import("./Button"))
const Card = ({ task, complete, onToggle, onDelete, openModal }) => {
  return (
    <div className="w-full flex justify-between items-center py-2 border-b border-black">
      <div className={`w-[50%] ${complete ? "line-through" : ""}`}>
        {task}
      </div>

      <div className="flex justify-between items-center w-[30%]">
        <div className="w-[30%]">
          <Suspense fallback={<p>Loading...</p>}>
            <Button
              name='Edit'
              className="bg-green-600"
              onClick={openModal}
            />
          </Suspense>
        </div>
        <div className="w-[30%]">
          <Suspense fallback={<p>Loading...</p>}>
            <Button
              name={complete ? "Completed" : "Incomplete"}
              className="bg-black"
              onClick={onToggle}
            />
          </Suspense>
        </div>

        <div className="w-[30%]">
          <Suspense fallback={<p>Loading...</p>}>
            <Button
              name="Delete"
              className="bg-red-500"
              onClick={onDelete}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Card