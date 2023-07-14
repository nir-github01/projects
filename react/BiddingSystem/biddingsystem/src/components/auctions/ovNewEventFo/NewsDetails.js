import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsDetails = (props) => {

    const [singleNews, setSingleNews] = useState([]);
    const [collapse, setCollapse] = useState(props.isExpand)

    useEffect(() => {
        //  let getnews =async() =>{
            //  await
              axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d41de6d67a114d82854a7963fb94eaf4")
                .then((res)=>{
                    // console.log("articles"+" "+res.data.articles);
                    setSingleNews(res.data.articles);
                })
              // }
              // getnews();
        }, []);

        let expandLess =() => {
             setCollapse(!collapse);
            
        }

  return (
    <div>
         <div className='newscontainer'>
               {
                  singleNews.map((news, idx) => {
                    return (
                        <div className='newsBox' key={idx}>
                        <p><img src={news.urlToImage} className='newsImage' /></p>
                        <p><b>Published At:</b>   {news.publishedAt}</p>
                        <p><b>Title:</b>    {news.title}</p>
                        <p><b>Content:</b> <span>  {news.content} </span> </p>
                        <p><b>Description :</b>   {news.description} </p>
                        <span  onClick={expandLess}><b>read less</b></span>
                      </div>
             
                    )}
                  )
               }

         </div>

    </div>
  )
}

export default NewsDetails