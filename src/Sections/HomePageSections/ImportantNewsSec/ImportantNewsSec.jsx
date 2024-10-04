import React, { useEffect, useState } from 'react';
import { IoNewspaperOutline } from 'react-icons/io5';
import './ImportantNewsSec.css';

const ImportantNewsSec = () => {
    const [importantNews, setImportantNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImportantNews = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/AllNews/');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const filteredNews = data.filter(news => news.important);
                setImportantNews(filteredNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImportantNews();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='important-newsSec' data-aos={"fade-up"}>
            <h1 className='newsSec-title'>
                <IoNewspaperOutline />
                News
            </h1>
            <ul className="all-importantNews">
                {importantNews.map(({ id, image, title, date }, index) => (
                    <li 
                        key={id} 
                        className="important-card"
                        data-aos={"fade-up"}
                        data-aos-delay={`${index}00`}
                    >
                        <div className="important-imgWrapper">
                            <img src={image} alt={title} className="important-img" />
                        </div>
                        <h6 className='importantNews-date'>
                            {date}
                        </h6>
                        <h2 className="importantNews-title">
                            {title}
                        </h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImportantNewsSec;
