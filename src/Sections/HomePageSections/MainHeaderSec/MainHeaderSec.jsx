import './MainHeaderSec.css';
import bgVideo from '../../../Assets/Videos/bgVid.mp4';

const MainHeaderSec = () => {
    return (
        <div className='MainHeaderSec'>
            <video 
                src={bgVideo} 
                autoPlay 
                loop 
                muted 
                className='bg-video'
            />
            <div className="vid-titleWrapper">
                <h1 className="vid-title" 
                data-aos={"fade-up"}
                data-aos-duration={"400"}
                >
                    First Distinctive Company
                </h1>
                <div className='vid-dis' 
                data-aos={"fade-up"}
                data-aos-duration={"400"}
                >
                    Oil & Gas Services
                </div>
                <div className=""
                    data-aos={"fade-up"}
                    data-aos-duration={"400"}
                    data-aos-delay={"500"}
                >
                    <div className="vid-btn" >
                        Send Message
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeaderSec;
