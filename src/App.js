import React, { useEffect, useState } from 'react';
import './App.css';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function App() {
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  // returns an error if their is no access key
  // if (!accessKey) {
  //   return (
  //     <a href="https://unsplash.com/developers" className="error">
  //       Required: Get your unsplash API key first
  //     </a>
  //   );
  // }

  return (
    <div className="app">
      <h1>Unsplash Image Gallery!</h1>

      <form>
        <input type="text" placeholder="Search Unsplash..." />
        <button>Search</button>
      </form>

      <div className="image-grid">
        {[...Array(100)].map((_, index) => (
          <div className="image" key={index}>
            <img src="https://placekitten.com/g/1920/1080" alt="Sample" />
          </div>
        ))}
      </div>
    </div>
  );
}
