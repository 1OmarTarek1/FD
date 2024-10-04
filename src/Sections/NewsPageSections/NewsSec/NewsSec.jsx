import { useEffect, useState } from 'react';
import { NewsCard } from '../../../Components';
import './NewsSec.css';

const NewsSec = () => {
    const [newsData, setNewsData] = useState([]);

    // Fetch data from the backend
    useEffect(() => {
        fetch('http://127.0.0.1:8000/AllNews/')
            .then(response => response.json())
            .then(data => setNewsData(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className='news-section'>
            <ul className="all-news">
                {newsData.map(newsItem => (
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
