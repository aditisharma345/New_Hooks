import "./App.css";
import React, { useState, useEffect } from "react";
import Main2 from "./Main2.js";
export default function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch("https://api.publicapis.org/entries", {
      header: {},
      method: "GET",
    });
    const data = await response.json();

    setPosts(data.entries.slice(0, 10));
    console.log(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="p-3" style={{ backgroundColor: "#a2cbf4" }}>
      <div className="row">
        {posts.map((posts, index) => (
          <div className="col-md-4" key={index}>
            <Main2
              API={posts.API}
              Description={posts.Description}
              Link={posts.Link}
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
