import Top from './Top.jsx';
import MediaMarketing from './MediaMarketing.jsx'
import SEOOptimization from './EngineOptimization.jsx'
import ResearchService from './ReasearchService.jsx'
import PRService from './PRService.jsx'
import TrafficManagement from './TrafficManagement.jsx'
import Markets from './Markets.jsx'
import PartnersRow from './PartnersRow.jsx';


import RequestBlock from '../../public/requestBlock/RequestBlock.jsx'
import CaseStudies from '../../public/caseStudies/CaseStudiesSlider.jsx'
import LatestNews from '../../public/newsBlock/LatestNews.jsx'

export default function OurServicesPage() {
  return (
    <div>
      <Top />
      <MediaMarketing></MediaMarketing>
      <SEOOptimization></SEOOptimization>
      <ResearchService></ResearchService>
      <PRService></PRService>
      <TrafficManagement></TrafficManagement>
      <RequestBlock/>
      <Markets></Markets>
      <CaseStudies></CaseStudies>
      <PartnersRow></PartnersRow>
      <LatestNews></LatestNews>
    </div>
  );
}