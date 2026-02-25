// src/pages/HomePage/HomePage.jsx
import Top from './Top.jsx';
import About from './about/About.jsx'
import FAQ from './FAQ.jsx'
import CaseStudiesSlider from './caseStudies/CaseStudiesSlider.jsx'
import Benefits from './Benefits.jsx'
import Pricing from './Pricing.jsx'
import ClientsOpinion from '../../public/clientsOpinion/ClientsOpinion.jsx'
import LatestNews from '../../public/newsBlock/LatestNews.jsx'

export default function HomePage() {
  return (
    <>
      <Top />
      <About></About>
      <FAQ></FAQ>
      <CaseStudiesSlider></CaseStudiesSlider>
      <Benefits></Benefits>
      <Pricing></Pricing>
      <ClientsOpinion></ClientsOpinion>
      <LatestNews></LatestNews>
      {/* Далее — другие секции (например, Features, Testimonials и т.д.) */}
    </>
  );
}


// export default function HomePage() {
//   return (
//     <div className="p-8 border-1">
//       <h1 className="text-2xl">Welcome to CREATEX</h1>
//     </div>
//   );
// }