import React, { useState, useEffect } from 'react';


const NewsPage = () => {

    const [allNews, setAllNews] = useState(new Array());
    const [marketAllNews, setMarketAllNews] = useState([]);
    useEffect(() => {
        let getNews = async() =>{
            let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=d41de6d67a114d82854a7963fb94eaf4",{
                method:"GET",
            });
            let newsData = await response.json();
            setAllNews(newsData);  
        }
        getNews();
    }, []);
    useEffect(() => {
        let getMktNews = async() =>{
            let responsemkt = await fetch(" https://api.mediastack.com/v1/news?access_key=7198ea74662111b2dde3537255377393&keywords=tennis&countries=us,gb,de"
            ,{
                method:"GET",
            });
            let mktnewsData = await responsemkt.json();
            setMarketAllNews(JSON.stringify( mktnewsData));
            
        }
        getMktNews();
    }, []);

    return (
    <>
          <div className='newsContainer'>
             <p>{JSON.stringify(allNews)}</p>
                { Array.isArray(allNews) ? allNews.map((news) =>(
                  <div className='newbox'>
                  <p>{news}</p>
                     <h6>{news.title}</h6>
                     <p>{news.description}</p>
                     <p>{news.author}</p>
                     <p></p> 
                  </div>
                 
                  ))  : " No News Found"}
          </div>
          <div className='mktNews_container'>

          <h1>Market news Announced</h1>
               <p>{marketAllNews}</p>
          </div>


    </>
  )
}

export default NewsPage