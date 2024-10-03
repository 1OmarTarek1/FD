import { SectionWrapper } from '../../Components'
import { ImportantNewsSec, MainHeaderSec, ServicesSection, WhyUsSec } from '../../Sections'
import './HomePage.css'



const HomePage = () => {
    return (
        <div className='home-page'>
            <MainHeaderSec />

            <SectionWrapper>
                <ServicesSection />
            </SectionWrapper>

            
            <SectionWrapper>
                <ImportantNewsSec />
            </SectionWrapper>

            <div style={{padding:"25px"}}>
                <WhyUsSec />
            </div>
        </div>
    )
}

export default HomePage