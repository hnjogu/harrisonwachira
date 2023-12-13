import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h3>{article.headline.main}</h3>
            <p>{article.snippet}</p>
            <a href={article.web_url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
