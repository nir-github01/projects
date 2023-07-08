import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NewsPage = () => {

    const [allNews, setAllNews] = useState([]);
    const [marketAllNews, setMarketAllNews] = useState([]);

    useEffect(() => {
     
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d41de6d67a114d82854a7963fb94eaf4")
            .then((res)=>{
                console.log(res.data.articles);
                setAllNews(res.data.articles);
            })
    }, []);


    useEffect(() => {
     
      axios.get("https://api.marketaux.com/v1/news/all?exchanges=NYSE,NASDAQ&api_token=0nliES2eaa5S8oYylGyf3MnIIttlRblPTeClq2jH")
          .then((res)=>{
              console.log(res.data.data);
              setMarketAllNews(res.data.data);
          })
  }, []);


    return (
    <>
          <div className='newsContainer'>
          <h5>Today's News</h5>
                {  allNews.map((news, idx) => { 
                  return(
                      <div className='news-box' key={idx}>
                        <p><img src={news.urlToImage} className='newsImage' /></p>
                        <p><b>Published At:</b>   {news.publishedAt}</p>
                        <p><b>Title:</b>    {news.title}</p>
                        <p><b>Content:</b>   {news.content}</p>
                        <p><b>Description :</b>   {news.description}</p>
                      </div>
                )})}
          </div>
           <hr />
          <div className='newsContainer'>
          <h4>Market News </h4>
                {  marketAllNews.map((mktnews, idx) => { 
                  return(
                      <div className='news-box' key={idx}>
                        <p><img src={mktnews.image_url} className='newsImage'/></p>
                        <p><b>Published At:</b>   {mktnews.published_at}</p>
                        <p><b>Title:</b>    {mktnews.title}</p>
                        <p><b>Content:</b>   {mktnews.keywords}</p>
                        <p><b>Description :</b>   {mktnews.description}</p>
                      </div>
                )})}
          </div>


    </>
  )
}

export default NewsPage