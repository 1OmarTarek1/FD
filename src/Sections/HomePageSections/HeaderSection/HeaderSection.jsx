import { HeaderCarousel, SecondaryBtn } from '../../../Components';
import './HeaderSection.css';





const HeaderSection = () => {

    return (
        <div className='header-section'>
            <HeaderCarousel />
            <div 
                className="titleWrapper"         
            >
                <div 
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h1 className="title">
                        First Distinctive Company 
                    </h1>
                    <h3>Oil & Gas Services</h3>
                    <SecondaryBtn>
                        Our Services
                    </SecondaryBtn>
                </div>
                
            </div>
        </div>
    )
}

export default HeaderSection