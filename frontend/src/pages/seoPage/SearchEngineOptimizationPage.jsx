import Top from './Top.jsx'
import First from './First.jsx'
import Second from './Second.jsx'
import Free from './Free.jsx'
import Roadmap from './Roadmap.jsx'
import Services from './Services.jsx'

import PartnersRow from '../../public/partnersRow/PartnersRow.jsx'
import Pricing from '../../public/pricing/Pricing.jsx'
import CaseStudiesSlider from '../../public/caseStudies/CaseStudiesSlider.jsx'

export default function SearchEngineOptimizationPage () {
    return(
        <div>
            <Top></Top>
            <PartnersRow></PartnersRow>
            <First></First>
            <Second></Second>
            <Free></Free>
            <Roadmap></Roadmap>
            <Pricing></Pricing>
            <CaseStudiesSlider></CaseStudiesSlider>
            <Services></Services>
        </div>
    )
}