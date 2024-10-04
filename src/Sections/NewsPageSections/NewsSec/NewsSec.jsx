import NewsData from '../../../Data/NewsData';
import { NewsCard } from '../../../Components';
import './NewsSec.css';

const NewsSec = () => {
    return (
        <div className='news-section'>
            <ul className="all-news">
                {NewsData.map(newsItem => (
                    <NewsCard 
                        key={newsItem.id}
                        image={newsItem.image}
                        title={newsItem.title}
                        date={newsItem.date}
                        paragraph={newsItem.paragraph}
                    />
                ))}
            </ul>
        </div>
    );
};

export default NewsSec;
