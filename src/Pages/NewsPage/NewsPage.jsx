import './NewsPage.css'
import { NewsSec } from '../../Sections';
import { NewsHeaderSec } from '../../Sections';



const NewsPage = () => {
    return (
        <div className='news-page'>
            <NewsHeaderSec />
            <NewsSec />
        </div>
    )
}

export default NewsPage