import Button from "./Button"

const Card = ({ task, complete, onToggle, onDelete }) => {
  return (
    <div className="w-full flex justify-between items-center py-2 border-b border-black">
      <div className={`w-[70%] ${complete ? "line-through" : ""}`}>
        {task}
      </div>

      <div className="flex justify-between items-center w-[30%]">
        <div className="w-[45%]">
          <Button
            name={complete ? "Completed" : "Incomplete"}
            className="bg-black text-white px-4 py-2"
            onClick={onToggle}
          />
        </div>

        <div className="w-[45%]">
          <Button
            name="Delete"
            className="bg-red-500 text-white px-4 py-2"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default Card