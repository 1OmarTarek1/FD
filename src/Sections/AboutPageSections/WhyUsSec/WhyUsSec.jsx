import { GiGearStickPattern } from 'react-icons/gi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { GrGroup } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import './WhyUsSec.css'


const WhyUsSec = () => {
    return (
        <div className="why-us">
            <h1 className="whyUs-title"
                data-aos="fade-up"
            >
                Why Choose FDEnergies?
            </h1>

            <div className="answer-points">
                <div className="answer-point"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h3 className="answerPoint-title">
                        <AiOutlineGlobal />
                        Global Reach
                    </h3>
                    <div className="answerPoint-text">
                        Operating in key markets worldwide
                    </div>
                </div>

                <div className="answer-point"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <h3 className="answerPoint-title">
                        <GiGearStickPattern />
                        Cutting-edge Technology
                    </h3>
                    <div className="answerPoint-text">
                        Leveraging the latest innovations
                    </div>
                </div>

                <div className="answer-point"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <h3 className="answerPoint-title">
                        <GrGroup />
                        Expert Team
                    </h3>
                    <div className="answerPoint-text">
                        Highly skilled professionals
                    </div>
                </div>
            </div>

            <div className="ready-wrapper"
                data-aos="fade-up"
            >
                <h1 className="ready-title">
                    Ready to Energize Your Future?
                </h1>
                <div className="ready-text">
                    Partner with FDEnergies for innovative and sustainable energy solutions.
                </div>
                <NavLink to={"/contact"} className="ready-btn">
                    Contact Us
                </NavLink>
            </div>
        </div>
    )
}

export default WhyUsSec