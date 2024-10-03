import { FaPeopleGroup} from "react-icons/fa6";
import './AboutTitlesSec.css'



const AboutTitlesSec = () => {
    return (
        <div className="titles-wrapper"
        data-aos="fade-up"
        data-aos-delay="300"
        >
            <h1 className="aboutUs-title" >
                <FaPeopleGroup />
                About FDEnergies
            </h1>
            <div className="about-subTitle">
                FDEnergies is a dynamic oil services company dedicated to providing innovative, reliable, and sustainable solutions to the energy industry. With a deep understanding of the challenges and opportunities in today’s energy landscape, we deliver tailored services that help our clients optimize their operations and drive growth.
                <br/>
                <br/>
                Founded with a commitment to excellence, safety, and environmental responsibility, we combine advanced technology with industry expertise to offer a wide range of services, from exploration and production support to logistics and maintenance. Our team of highly skilled professionals works closely with clients to ensure efficiency, reduce risks, and maximize value in every project.
                <br />
                <br />
                At FDEnergies, we believe that the future of energy lies in collaboration, innovation, and a commitment to sustainability. We are proud to be at the forefront of this transformation, partnering with global energy leaders to meet the
            </div>
        </div>
    )
}

export default AboutTitlesSec