import React from "react";
import { useEffect, useState } from "react";

function Card2() {
  let [Articles, SetArticles] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-06-15&sortBy=publishedAt&apiKey=d505d9b0bdef4983a254fd1a6206dd92`
    )
      .then((response) => {
        return response.json();
      })
      .then((Data) => {
        SetArticles(Data.articles);
        //console.log(SetArticles);
      });
  }, [Articles]);

  return (
    <>
      {Articles.map((e, i) =>
        e.urlToImage != null && e.urlToImage !== "" ? (
          <card>
            <img src={e.urlToImage} alt={e.title} />
            <h1>{e.title.slice(0, 10)}....</h1>
            <p>{e.content.slice(0, 130)}....</p>
          </card>
        ) : null
      )}
    </>
  );
}

export default Card2;
