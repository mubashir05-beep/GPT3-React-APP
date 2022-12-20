import React from "react";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import { Article } from "../../components";
const Blog = () => {
  return (
    <div className="gpt3__blog-container " id="blog">
      <h1 className="gpt3__blog-headTitle gradient__text ">
        A lot is happening,
        <br /> We are blogging about it.
      </h1>
      <div className="gpt3__blog-tile__container">
        <div className="gpt3__blog-tile__firstSection">
          <Article thumbnail={blog01} />
        </div>
        <div className="gpt3__blog-tile__secoundSection">
          <Article thumbnail={blog02} />
          <Article thumbnail={blog03} />
          <Article thumbnail={blog04} />
          <Article thumbnail={blog05} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
