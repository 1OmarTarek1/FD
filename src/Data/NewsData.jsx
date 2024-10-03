//  IMAGES
import news_01 from '../Assets/Images/news/news-01.jpg'
import news_02 from '../Assets/Images/news/news-02.jpg'
import news_03 from '../Assets/Images/news/news-03.jpg'
import news_04 from '../Assets/Images/news/news-04.jpg'
import news_05 from '../Assets/Images/news/news-05.jpg'
import news_06 from '../Assets/Images/news/news-06.jpg'
import news_07 from '../Assets/Images/news/news-07.jpg'
import news_08 from '../Assets/Images/news/news-08.jpg'
import news_09 from '../Assets/Images/news/news-09.jpg'
import news_10 from '../Assets/Images/news/news-10.jpg'
import news_11 from '../Assets/Images/news/news-11.jpg'




let para = <>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Quae, similique ipsam provident quos illum praesentium culpa, 
    rem delectus cum aliquid veritatis.
    Nobis ratione ipsum iusto expedita nostrum, dicta rem! Nam.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Quae, similique ipsam provident quos illum praesentium culpa, 
    rem delectus cum aliquid veritatis.
</>

const NewsData =  [ 
    { // News-01
        id        :  "News-01", 
        important :  false ,
        image     :  news_01 , 
        title     :  "Minister Badawi and ExxonMobil Discuss New Investment Opportunities in Egypt’s Oil and Gas Sector", 
        date      :  "Thursday, 3rd October 2024",
        paragraph :  para,
    },
    { // News-02
        id        :  "News-02", 
        important :  false ,
        image     :  news_02 , 
        title     :  "Global Oil Prices Fluctuate Amid Talks of New OPEC Agreement", 
        date      :  "Wednesday, 2nd October 2024",
        paragraph :  para,
    },
    { // News-03
        id        :  "News-03", 
        important :  false ,
        image     :  news_03 , 
        title     :  "Shell Signs New Deal for Offshore Exploration in Mediterranean Sea", 
        date      :  "Tuesday, 1st October 2024",
        paragraph :  para,
    },
    { // News-04
        id        :  "News-04", 
        important :  false ,
        image     :  news_04 , 
        title     :  "New Technologies in Oil Drilling Reduce Environmental Impact", 
        date      :  "Monday, 30th September 2024",
        paragraph :  para,
    },
    { // News-05
        id        :  "News-05", 
        important :  false ,
        image     :  news_05 , 
        title     :  "BP’s New Refinery Expansion to Boost Egypt’s Oil Output by 15%", 
        date      :  "Sunday, 29th September 2024",
        paragraph :  para,
    },
    { // News-06
        id        :  "News-06", 
        important :  false ,
        image     :  news_06 , 
        title     :  "Energy Minister Opens New Gas Field in Western Desert", 
        date      :  "Saturday, 28th September 2024",
        paragraph :  para,
    },
    { // News-07
        id        :  "News-07", 
        important :  false ,
        image     :  news_07 , 
        title     :  "Chevron’s Sustainable Energy Strategy Gathers Momentum", 
        date      :  "Friday, 27th September 2024",
        paragraph :  para,
    },
    { // News-08
        id        :  "News-08", 
        important :  false ,
        image     :  news_08 , 
        title     :  "Egypt’s LNG Exports Surge Amid Increased European Demand", 
        date      :  "Thursday, 26th September 2024",
        paragraph :  para,
    },
    { // News-09
        id        :  "News-09", 
        important :  true ,
        image     :  news_09 , 
        title     :  "Oil Giants Meet in Abu Dhabi to Discuss Future of Middle Eastern Oil", 
        date      :  "Wednesday, 25th September 2024",
        paragraph :  para,
    },
    { // News-10
        id        :  "News-10", 
        important :  true ,
        image     :  news_10 , 
        title     :  "Innovative Techniques in Oil Exploration Revealed at Global Summit", 
        date      :  "Tuesday, 24th September 2024",
        paragraph :  para,
    },
    { // News-11
        id        :  "News-11", 
        important :  true ,
        image     :  news_11 , 
        title     :  "New Gas Discoveries in the Mediterranean to Strengthen Egypt’s Energy Independence", 
        date      :  "Monday, 23rd September 2024",
        paragraph :  para,
    },
]

export default NewsData;
