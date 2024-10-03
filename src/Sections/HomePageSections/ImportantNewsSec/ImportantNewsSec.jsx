import React from 'react';
import NewsData from '../../../Data/NewsData';
import { CirPrimaryBtn } from '../../../Components';
import { IoNewspaperOutline } from 'react-icons/io5';
import './ImportantNewsSec.css';

const ImportantNewsSec = () => {
    const importantNews = NewsData.filter(news => news.important);

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
                        <div className="imp-btnWrapper">
                            <CirPrimaryBtn />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImportantNewsSec;
