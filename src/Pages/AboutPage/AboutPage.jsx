import { AboutHeaderSec, AboutTitlesSec, IdeaSec, LetterSec, OurStrategySec, WhyUsSec } from '../../Sections'
import './AboutPage.css'







const AboutPage = () => {
    return (
        <div className='about-page'>
            <AboutHeaderSec />
            <div className="aboutUs-Sec">
                <AboutTitlesSec />
                <IdeaSec />
                <OurStrategySec />
                <WhyUsSec />
            </div>
            <LetterSec />
        </div>
    )
}

export default AboutPage