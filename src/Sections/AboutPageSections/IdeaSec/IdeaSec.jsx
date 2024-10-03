import { FaRegLightbulb} from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import './IdeaSec.css'


const IdeaSec = () => {
    return (
        <div className="idea-wrapper">
            <div className="idea-item"
                data-aos="fade-right"
            >
                <h3 className="ideaItem-title">
                    <IoMdLocate />
                    Our Mission
                </h3>
                <p className="ideaItem-para">
                    At FDEnergies, our mission is to fuel progress and innovation by providing reliable,
                    sustainable, and cutting-edge oil services to clients across the globe. 
                    We are committed to delivering high-quality solutions that meet the ever-evolving 
                    needs of the energy industry while ensuring safety, environmental stewardship, and 
                    operational excellence.
                </p>
            </div>
            <div className="idea-item"
                data-aos="fade-left"
                data-aos-delay="500"
            >
                <h3 className="ideaItem-title">
                    <FaRegLightbulb />
                    Our Vision
                </h3>
                <p className="ideaItem-para">
                    Our vision is to be a global leader in the oil services industry, 
                    setting new standards for efficiency, sustainability, 
                    and technological innovation. We aim to drive the future of 
                    energy by empowering our clients with exceptional services and fostering 
                    long-term partnerships. Through our commitment to excellence, 
                    we strive to create a lasting positive 
                    impact on both the industry and the environment, 
                    paving the way for a cleaner, more sustainable future.
                </p>
            </div>
        </div>
    )
}

export default IdeaSec