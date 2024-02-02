import React, { useEffect, useState } from 'react';
import Navbar from './component/Navebar';
import NewsSection from './component/NewsSection';

const API_KEY = '5895c5b8bcef4811915773002134fc71';
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${API_KEY}`;

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(NEWS_API_URL)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <Navbar title={"News Portal"}/>
      {news ? (
        news.map((article, index) => (
          <NewsSection key={index} article={article} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
