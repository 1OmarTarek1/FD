import { SectionWrapper } from '../../Components'
import { HeaderSection, MainHeaderSec, ServicesSection } from '../../Sections'
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

            <SectionWrapper>
                <h1>Section - 3</h1>
            </SectionWrapper>

            <SectionWrapper>
                <h1>Section - 4</h1>
            </SectionWrapper>

            <SectionWrapper>
                <h1>Section - 5</h1>
            </SectionWrapper>
        </div>
    )
}

export default HomePage