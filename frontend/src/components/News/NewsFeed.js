import React from 'react';

const NewsFeed = ({ news }) => {
  return (
    <div>
      <h2>Latest News</h2>
      <ul>
        {news.map((article) => (
          <li key={article.title}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
