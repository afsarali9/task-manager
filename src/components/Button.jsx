const Button = ({ name, onClick, className = '' }) => {
  return <button className={`w-full cursor-pointer ${className}`} onClick={onClick}>{name}</button>
}

export default Button