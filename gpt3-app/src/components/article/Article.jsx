import React from "react";
import "./article.css";

const Article = ({ thumbnail }) => {
  return (
    <div className="gpt3__article-container">
      <img src={thumbnail} alt="Blog Thumbnail" srcset="" />

      <div className="gpt3__article-content">
        <div className="uppersection">
          <h5>Sep 26,2021</h5>
          <h2>GPT-3 and Open AI is the future. Let us explore how it is?</h2>
        </div>
        <h5>Read Full Article</h5>
      </div>
    </div>
  );
};

export default Article;
