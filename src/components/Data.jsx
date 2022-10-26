import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Data.css"

const Data = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main-card">
      {posts.map((post) => {
        return (
          <div className="data-card" key={post.id}>
            <div className="info">
              <span className="card-title">{post.title}</span>
              <span className="card-id">{post.id}</span>
            </div>
            <span className="card-text">{post.text}</span>
            <img className="card-img" src={post.thumbnailUrl} alt="img" />
          </div>
        );
      })}
    </div>
  );
};

export default Data;
