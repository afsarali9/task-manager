import Button from "./Button"

const Card = ({ task, complete, onToggle, onDelete, openModal }) => {
  return (
    <div className="w-full flex justify-between items-center py-2 border-b border-black">
      <div className={`w-[50%] ${complete ? "line-through" : ""}`}>
        {task}
      </div>

      <div className="flex justify-between items-center w-[30%]">
        <div className="w-[30%]">
          <Button
            name='Edit'
            className="bg-green-600"
            onClick={openModal}
          />
        </div>
        <div className="w-[30%]">
          <Button
            name={complete ? "Completed" : "Incomplete"}
            className="bg-black"
            onClick={onToggle}
          />
        </div>

        <div className="w-[30%]">
          <Button
            name="Delete"
            className="bg-red-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default Card