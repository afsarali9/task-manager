const Button = ({ name, onClick, className = '' }) => {
  return <button className={`w-full cursor-pointer text-white px-4 py-2 ${className}`} onClick={onClick}>{name}</button>
}

export default Button