const Card = ({ children, className = '', padding = true, onClick }) => {
  return (
    <div 
      className={`
        bg-white rounded-xl shadow-sm 
        ${padding ? 'p-4 sm:p-5' : ''} 
        ${onClick ? 'cursor-pointer hover:shadow-md transition' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card