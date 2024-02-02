import React from 'react';

function NewsSection({ article }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p className="card-text">{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsSection;
