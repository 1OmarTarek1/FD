import { NewsSec, ProjectRightSide, ServiceRightSide } from '../../Sections';
import { NewsHeaderSec } from '../../Sections';
import './NewsPage.css'



const NewsPage = () => {
    return (
        <div className='news-page'>
            <NewsHeaderSec />
            <div className="news-container">
                <NewsSec />
                <div className="right-side">
                    <ServiceRightSide />
                    <ProjectRightSide />
                </div>
            </div>

        </div>
    )
}

export default NewsPage