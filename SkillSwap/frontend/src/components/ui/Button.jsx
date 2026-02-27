const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  onClick,
  ...props 
}) => {
  const baseClasses = "rounded-lg font-medium transition duration-200"
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
    danger: "bg-red-500 text-white hover:bg-red-600"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }
  
  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button