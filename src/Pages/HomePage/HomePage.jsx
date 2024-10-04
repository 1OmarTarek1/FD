import { SecondaryBtn, SectionWrapper } from '../../Components'
import { ImportantNewsSec, LastProjectsSec, MainHeaderSec, ServicesSection, WhyUsSec } from '../../Sections'
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
                <SecondaryBtn path={"/News"}>
                    Show more
                </SecondaryBtn>
            </SectionWrapper>


            <SectionWrapper>
                <LastProjectsSec />
                <SecondaryBtn path={"/Projects"}>
                    Show more
                </SecondaryBtn>
            </SectionWrapper>



            <div style={{padding:"25px"}}>
                <WhyUsSec />
            </div>
        </div>
    )
}

export default HomePage