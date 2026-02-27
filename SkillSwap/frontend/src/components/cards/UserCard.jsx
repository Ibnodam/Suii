import { Link } from 'react-router-dom'
import { MessageCircle, Calendar } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function UserCard({ user, onMeetingClick }) {
  const { id, name, avatar, skills, rating, city, reviews } = user
  
  return (
    <Card className="hover:shadow-md transition">
      <div className="flex items-start space-x-4">
        {/* Аватар */}
        <img 
          src={avatar || `https://ui-avatars.com/api/?name=${name}&size=64&background=3b82f6&color=fff`}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
        />
        
        {/* Информация */}
        <div className="flex-1 min-w-0">
          <Link to={`/profile/${id}`}>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 truncate">
              {name}
            </h3>
          </Link>
          
          {city && (
            <p className="text-sm text-gray-500 mb-2">{city}</p>
          )}
          
          {/* Рейтинг */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({reviews || 0})</span>
          </div>
          
          {/* Навыки (первые 3) */}
          <div className="flex flex-wrap gap-1 mb-3">
            {skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{skills.length - 3}
              </span>
            )}
          </div>
          
          {/* Действия */}
          <div className="flex space-x-2">
            <Link to={`/messages/${id}`}>
              <Button size="sm" variant="primary">
                <MessageCircle className="w-4 h-4 mr-1" />
                Чат
              </Button>
            </Link>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onMeetingClick?.(user)}
            >
              <Calendar className="w-4 h-4 mr-1" />
              Встреча
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}




// import { Link } from 'react-router-dom'
// import { MessageCircle, Calendar } from 'lucide-react'
// import Card from '../ui/Card'
// import Button from '../ui/Button'

// const UserCard = ({ user }) => {
//   const { id, name, avatar, skills, rating, city } = user
  
//   return (
//     <Card className="hover:shadow-md transition">
//       <div className="flex items-start space-x-4">
//         {/* Аватар */}
//         <img 
//           src={avatar || `https://ui-avatars.com/api/?name=${name}&background=3b82f6&color=fff`}
//           alt={name}
//           className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
//         />
        
//         {/* Информация */} 
//         <div className="flex-1 min-w-0">
//           <Link to={`/profile/${id}`}>
//             <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 truncate">
//               {name}
//             </h3>
//           </Link>
          
//           {city && (
//             <p className="text-sm text-gray-500 mb-2">{city}</p>
//           )}
          
//           {/* Рейтинг */}
//           <div className="flex items-center mb-2">
//             <div className="flex">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <svg
//                   key={star}
//                   className={`w-4 h-4 ${
//                     star <= rating ? 'text-yellow-400' : 'text-gray-300'
//                   }`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 ml-1">({user.reviews || 0})</span>
//           </div>
          
//           {/* Навыки (первые 3) */}
//           <div className="flex flex-wrap gap-1 mb-3">
//             {skills.slice(0, 3).map((skill, index) => (
//               <span 
//                 key={index}
//                 className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full"
//               >
//                 {skill}
//               </span>
//             ))}
//             {skills.length > 3 && (
//               <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
//                 +{skills.length - 3}
//               </span>
//             )}
//           </div>
          
//           {/* Действия */}
//           <div className="flex space-x-2">
//             <Button size="sm" variant="primary">
//               <MessageCircle className="w-4 h-4 mr-1" />
//               Чат
//             </Button>
//             <Button size="sm" variant="outline">
//               <Calendar className="w-4 h-4 mr-1" />
//               Встреча
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Card>
//   )
// }

// export default UserCard