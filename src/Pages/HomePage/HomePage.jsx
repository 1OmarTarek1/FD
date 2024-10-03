import { SectionWrapper } from '../../Components'
import { MainHeaderSec, ServicesSection, WhyUsSec } from '../../Sections'
import './HomePage.css'



const HomePage = () => {
    return (
        <div className='home-page'>
            <MainHeaderSec />

            {/* <SectionWrapper>
                <HeaderSection />
            </SectionWrapper> */}

            <SectionWrapper>
                <ServicesSection />
            </SectionWrapper>

            <div style={{padding:"25px"}}>
                <WhyUsSec />
            </div>
        </div>
    )
}

export default HomePage