import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
const Modal = ({ modal, todo, onUpdate }) => {
  const [value, setValue] = useState(todo.task)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return ReactDOM.createPortal(
    <div className='fixed bg-black/50 w-full h-screen'>
      <div className='relative w-full h-screen'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xs w-100'>
          <button className='group absolute right-0 top-0 bg-black text-white cursor-pointer w-5 h-5 mt-1 mr-1 flex justify-center items-center' onClick={() => modal(false)}>
            <span className='inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90 leading-none'>X</span>
          </button>
          <h2 className='p-2 border-b border-black font-medium text-center'>Modal Tital</h2>
          <div className='p-5'>
            <input
              type='text'
              value={value}
              ref={inputRef}
              onChange={(e) => setValue(e.target.value)}
              className='bg-white p-3 border-solid border-2 border-black outline-none w-full'
            />
            <Button className="bg-blue-700 mt-4" name='Update' onClick={() => onUpdate(value)} />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}
export default Modal