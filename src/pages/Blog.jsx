import React, { useState } from "react";

function Blog() {
  const blogPosts = [
    {
      title: "Sample Blog Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum eget nibh finibus tincidunt vel eu dui. Nullam fermentum urna in faucibus tempus. Sed sed erat a diam congue venenatis nec nec elit. Phasellus aliquam ante id dui hendrerit tincidunt. Nulla tincidunt nulla vitae magna vulputate, id lobortis purus pretium. Curabitur tincidunt ex mi, eget laoreet lacus viverra sed. Ut non facilisis tellus.",
    },
    {
      title: "Sample Blog Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ipsum eget nibh finibus tincidunt vel eu dui. Nullam fermentum urna in faucibus tempus. Sed sed erat a diam congue venenatis nec nec elit. Phasellus aliquam ante id dui hendrerit tincidunt. Nulla tincidunt nulla vitae magna vulputate, id lobortis purus pretium. Curabitur tincidunt ex mi, eget laoreet lacus viverra sed. Ut non facilisis tellus.",
    },
    // Add more blog posts here
  ];

  const [expandedPosts, setExpandedPosts] = useState([]);

  const handleExpand = (index) => {
    if (expandedPosts.includes(index)) {
      setExpandedPosts((prevExpanded) =>
        prevExpanded.filter((item) => item !== index)
      );
    } else {
      setExpandedPosts((prevExpanded) => [...prevExpanded, index]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>This is our Blog Page. Welcome!</h1>
      <p style={{ textAlign: "center" }}>
        Check out our latest articles and stay updated with the latest trends.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {blogPosts.map((post, index) => (
          <div
            key={index}
            style={{
              maxWidth: "400px",
              border: "1px solid #ccc",
              padding: "20px",
            }}
          >
            <a href={`/blog/${index}`} style={{ textDecoration: 'none' }}>
              <h2>{post.title}</h2>
            </a>
            {expandedPosts.includes(index) ? (
              <div>
                <p>{post.content}</p>
                <button onClick={() => handleExpand(index)}>Read Less</button>
              </div>
            ) : (
              <div>
                <p>{post.content.substring(0, 100) + "..."}</p>
                <button onClick={() => handleExpand(index)}>Read More</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

