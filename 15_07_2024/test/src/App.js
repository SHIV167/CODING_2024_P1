import { useState } from "react";
import "./App.css";
import "./components/Card.css";
import Card from "./components/Card.jsx";
function App() {
  let [Count, SetCount] = useState(0);
  let [Display, SetCard] = useState(false);

  let Data = [
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
    {
      Title: "Zebra-finch-Taeniopygia-guttata-bird",
      Image:
        "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg",
    },
  ];
  return (
    <>
      <div>
        <center>
          <button
            className="button"
            style={{ padding: "2rem" }}
            onClick={() => {
              SetCount(Count + 1);
              //console.log({ Name });
            }}>
            +
          </button>
          <h1>Counter {Count}!!</h1>
          <button
            style={{ padding: "2rem" }}
            className="button"
            onClick={() => {
              SetCount(Count - 1);
              //console.log({ Name });
            }}>
            -
          </button>
        </center>
        <center style={{ margin: "10px" }}>
          <button
            className="button"
            style={{ padding: "2rem" }}
            onClick={() => {
              SetCard(!Display);
              //console.log({ Name });
            }}>
            SHOW / HIDE CARDS
          </button>
        </center>
      </div>
      <div className="container">
        {Display
          ? Data.map((e, i) => <Card Image={e.Image} Title={e.Title} />)
          : null}
      </div>
    </>
  );
}

export default App;
