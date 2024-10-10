import React from "react";
import { Link } from "react-router-dom";

const BlogAreaItem = (props) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to="">
          <img src={props.item.src} alt="" />
        </Link>
      </div>
      <div className="blog-post-content">
        <Link to="" className="tag">
          {props.item.tag}
        </Link>
        <h2 className="title">
          {props.item.title}
        </h2>
        <div className="blog-meta">
          <ul className="list-wrap">
            <li className="avatar-img">
              <Link to="">
                <img src={props.item.author_img} alt="" />
              </Link>
            </li>
            <li>
              By <Link to="">{props.item.author_name}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogAreaItem;
