import x from './pics/footer/logo.png'
import fb from './pics/footer/facebook.png'
import lin from './pics/footer/linkedin.png'
import twit from './pics/footer/twitter.png'
import ig from './pics/footer/instagram.png'
import aw1 from './pics/footer/award1.png'
import aw2 from './pics/footer/award2.png'
import aw3 from './pics/footer/award3.png'
import aw4 from './pics/footer/award4.png'
import phone from './pics/footer/phone.png'
import mail from './pics/footer/mail.png'
import heart from './pics/footer/heart.png'
import up from './pics/footer/up.png'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // плавная прокрутка
    });
  };

  return (
    <footer className="bg-[#1E212C] text-white">
      {/* Верхняя часть */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="flex justify-between gap-16">
          {/* Логотип + описание */}
          <div className="max-w-[280px]">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-white text-2xl font-bold tracking-wide">
                CREATE
              </span>
              <img 
                src={x} 
                alt="x"
                className="w-5 h-5"
              />
            </div>
            <p className="text-white/60 text-sm mb-6">
              Createx SEO Agency is a full-service digital marketing agency.
              We help businesses make more money through a wealth of performance data and market research.
            </p>
            <div className="flex gap-4">
              <img src={fb} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
              <img src={lin} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
              <img src={twit} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
              <img src={ig} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6">COMPANY</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Case Studies</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contacts</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">SERVICES</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="hover:text-white cursor-pointer">Social Media</li>
              <li className="hover:text-white cursor-pointer">SEO</li>
              <li className="hover:text-white cursor-pointer">Research</li>
              <li className="hover:text-white cursor-pointer">Content & PR</li>
              <li className="hover:text-white cursor-pointer">Paid Traffic</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">CONTACT US</h4>
            <div className="space-y-4 text-white/60 text-sm">
              <div className="flex items-center gap-3">
                <img src={phone} alt="" />
                <span>(405) 555-0128</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={mail} alt="" />
                <span>hello@createx.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="max-w-[280px]">
            <h4 className="font-bold mb-6">SIGN UP TO OUR NEWSLETTER</h4>

            <div className="relative mb-3">
              <input
                type="email"
                placeholder="youremail@mail.com"
                className="w-full bg-white/10 text-white placeholder-white/40 text-sm px-4 py-3 pr-12 rounded border border-white/20 focus:outline-none focus:border-white"
              />

              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-[#7772F1] cursor-pointer"
              >
                →
              </button>
            </div>

            <p className="text-white/40 text-xs">
              *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
            </p>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <img src={aw1} alt=""  />
            <img src={aw2} alt="" className="" />
            <img src={aw3} alt="" className="" />
            <img src={aw4} alt="" className="" />
          </div>

          {/* Кнопка с прокруткой вверх */}
          <button 
            onClick={scrollToTop}
            className="text-white/60 hover:text-white text-sm"
            aria-label="Scroll to top"
          >
            <img src={up} alt="Scroll to top" className="cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Самый низ */}
      <div className="bg-white/5 py-4">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center gap-2 text-white text-sm">
            <span>© All rights reserved. Made with</span>
            <img 
              src={heart} 
              alt="heart"
              className="w-4 h-4"
            />
            <span>by Createx Studio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// // import x from '../pics/footer/logo.png' // после названия компании
// // import fb from '../pics/footer/facebook.png'
// // import lin from '../pics/footer/linkedin.png'
// // import twit from '../pics/footer/twitter.png'
// // import ig from '../pics/footer/instagram.png'

// // import aw1 from '../pics/footer/award1.png'
// // import aw2 from '../pics/footer/award2.png'
// // import aw3 from '../pics/footer/award3.png'
// // import aw4 from '../pics/footer/award4.png'

// // import phone from '../pics/footer/phone.png'
// // import mail from '../pics/footer/mail.png'

// // export default function Footer() {}

// import x from './pics/footer/logo.png'
// import fb from './pics/footer/facebook.png'
// import lin from './pics/footer/linkedin.png'
// import twit from './pics/footer/twitter.png'
// import ig from './pics/footer/instagram.png'

// import aw1 from './pics/footer/award1.png'
// import aw2 from './pics/footer/award2.png'
// import aw3 from './pics/footer/award3.png'
// import aw4 from './pics/footer/award4.png'

// import phone from './pics/footer/phone.png'
// import mail from './pics/footer/mail.png'

// import heart from './pics/footer/heart.png'
// import up from './pics/footer/up.png'

// export default function Footer() {
//   return (
//     <footer className="bg-[#1E212C] text-white">

//       {/* Верхняя часть */}
//       <div className="max-w-[1200px] mx-auto px-8 py-16">

//         <div className="flex justify-between gap-16">

//           {/* Логотип + описание */}
//           <div className="max-w-[280px]">
//             {/* <img src={x} alt="Createx" className="mb-6" /> */}
//             <div className="flex items-center gap-1 mb-6">
//               <span className="text-white text-2xl font-bold tracking-wide">
//                 CREATE
//               </span>

//               <img 
//                 src={x} 
//                 alt="x"
//                 className="w-5 h-5"
//               />
//             </div>

//             <p className="text-white/60 text-sm mb-6">
//               Createx SEO Agency is a full-service digital marketing agency.
//               We help businesses make more money through a wealth of performance data and market research.
//             </p>

//             <div className="flex gap-4">
//               <img src={fb} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
//               <img src={lin} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
//               <img src={twit} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
//               <img src={ig} alt="" className="opacity-60 hover:opacity-100 cursor-pointer" />
//             </div>
//           </div>

//           {/* Company */}
//           <div>
//             <h4 className="font-bold mb-6">COMPANY</h4>
//             <ul className="space-y-3 text-white/60 text-sm">
//               <li className="hover:text-white cursor-pointer">About Us</li>
//               <li className="hover:text-white cursor-pointer">Case Studies</li>
//               <li className="hover:text-white cursor-pointer">Blog</li>
//               <li className="hover:text-white cursor-pointer">Careers</li>
//               <li className="hover:text-white cursor-pointer">Contacts</li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-bold mb-6">SERVICES</h4>
//             <ul className="space-y-3 text-white/60 text-sm">
//               <li className="hover:text-white cursor-pointer">Social Media</li>
//               <li className="hover:text-white cursor-pointer">SEO</li>
//               <li className="hover:text-white cursor-pointer">Research</li>
//               <li className="hover:text-white cursor-pointer">Content & PR</li>
//               <li className="hover:text-white cursor-pointer">Paid Traffic</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-bold mb-6">CONTACT US</h4>

//             <div className="space-y-4 text-white/60 text-sm">
//               <div className="flex items-center gap-3">
//                 <img src={phone} alt="" />
//                 <span>(405) 555-0128</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <img src={mail} alt="" />
//                 <span>hello@createx.com</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Awards */}
//       <div className="border-t border-white/10 py-8">
//         <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">

//           <div className="flex gap-8 items-center">
//             <img src={aw1} alt=""  />
//             <img src={aw2} alt="" className="" />
//             <img src={aw3} alt="" className="" />
//             <img src={aw4} alt="" className="" />
//           </div>

//           <button className="text-white/60 hover:text-white text-sm">
//             <img src={up} alt="" className="cursor-pointer" />
//           </button>

//         </div>
//       </div>

//       {/* Самый низ */}
//       {/* <div className="bg-white opacity-5 py-4">
//         <div className="max-w-[1200px] mx-auto px-8 text-white/60 text-sm">
//          <span> © All rights reserved. Made with </span><img src={heart} alt=""/> <span>by Createx Studio</span>
//         </div>
//       </div> */}

//       {/* Самый низ */}
// <div className="bg-white/5 py-4">
//   <div className="max-w-[1200px] mx-auto px-8">
    
//     <div className="flex items-center gap-2 text-white text-sm">
//       <span>© All rights reserved. Made with</span>

//       <img 
//         src={heart} 
//         alt="heart"
//         className="w-4 h-4"
//       />

//       <span>by Createx Studio</span>
//     </div>

//   </div>
// </div>

//     </footer>
//   )
// }