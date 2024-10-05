import bgVideo from '../../../Assets/Videos/bgVid.mp4';
import { GasPriceCom } from '../../../Components';
import './MainHeaderSec.css';

const MainHeaderSec = () => {





    return (
        <div className='MainHeaderSec'>
            <video src={bgVideo} 
                autoPlay 
                loop 
                muted 
                className='bg-video'
            />
            <div className="vid-titleWrapper">
                <h1 className="vid-title" data-aos={"fade-up"} data-aos-duration={"400"}>
                    First Distinctive Company
                </h1>
                <div className='vid-dis' data-aos={"fade-up"} data-aos-duration={"400"}>
                    Oil & Gas Services
                </div>
            </div>
            <GasPriceCom />
        </div>
    );
};

export default MainHeaderSec;
