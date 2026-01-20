import bg from './images/bg.png'
import bg_cont from './images/bg-content.png'

export default function Top() {
    return(
<div className="h-[200px] mt-2 w-full relative overflow-hidden bg-white">
  <div 
    className="absolute inset-0 -mx-[50px]"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      opacity: 0.5,
    }}
  />
  <img 
    src={bg_cont} 
    alt="Content"
    className="
      absolute 
      top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2
      max-h-full max-w-full
      object-contain
    "
  />
</div>)
}


// <div className="h-[200px] w-full relative overflow-hidden">
//   <div 
//     className="absolute inset-0 -mx-[10px]"
//     style={{
//       backgroundImage: `url(${bg})`,
//       backgroundSize: 'auto',
//       backgroundRepeat: 'repeat',
//     }}
//   />
//   <img 
//     src={bg_cont} 
//     alt="Content"
//     className="
//       absolute 
//       top-1/2 left-1/2 
//       -translate-x-1/2 -translate-y-1/2
//       max-h-full max-w-full
//       object-contain
//     "
//   />
// </div>
