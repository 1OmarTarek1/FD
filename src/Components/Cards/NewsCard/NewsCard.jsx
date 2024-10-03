import './NewsCard.css'

const NewsCard = ({ image, title, date, paragraph }) => {
    return (
        <li className="news-card"
            data-aos={"fade-right"}
            data-aos-delay={"300"}
        >
            <div className="newsImg-wrapper">
                <img src={image} alt={title} className="news-img" />
            </div>
            <div className="news-content">
                <h3 className="newsCard-title">{title}</h3>
                <h6 className="newsCard-date">{date}</h6>
                <p className="newsCard-paragraph">{paragraph}</p>
            </div>
        </li>
    );
};

export default NewsCard;
