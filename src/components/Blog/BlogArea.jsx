import React from "react";
import BlogAreaItem from "./BlogAreaItem";

const BlogArea = () => {
  const blog_area_items = [
    {
      src: "/img/blog/blog_img01.jpg",
      tag: "Branding",
      title: "Top Trends Shaping the Future of E-Commerce Website Development.",
      author_img: "/img/blog/blog_avatar01.png",
      author_name: "Aadarsh",
    },
    {
      src: "/img/blog/blog_img02.jpg",
      tag: "Branding",
      title: "Essential Mobile App Features for Maximizing User Engagement.",
      author_img: "/img/blog/blog_avatar02.png",
      author_name: "Siddarth",
    },
    {
      src: "/img/blog/blog_img03.jpg",
      tag: "Branding",
      title: "How ERP Systems are Revolutionizing Workflow Management in Modern Enterprises.",
      author_img: "/img/blog/blog_avatar03.png",
      author_name: "Aadarsh",
    },
  ];

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">My Blog</span>
              <h2 className="title">News & Updates</h2>
              <p>
              Stay Updated with the Latest Trends in Digital Innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_area_items.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <BlogAreaItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
