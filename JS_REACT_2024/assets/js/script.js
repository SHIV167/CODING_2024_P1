//JS STARTS FROM HERE
let Main = document.getElementsByTagName("main")[0];
let Click = document.getElementById("me");
async function Getdata(Topic) {
  let Data = await fetch(
    `https://newsapi.org/v2/everything?q=${Topic}&from=2024-06-02&sortBy=publishedAt&apiKey=d505d9b0bdef4983a254fd1a6206dd92`
  );
  let Res = await Data.json();
  let Finaldata = Res.articles;
  //console.log(Finaldata);
  Main.innerHTML = "";
  Finaldata.map((News) => {
    let Img = News.urlToImage;
    let Url = News.url;
    let Date = News.publishedAt;
    let Content = News.content;
    if (Img != null && Img != "") {
      Main.innerHTML += `<div class="card">
    <img src="${Img}"/>
    <div class="Content">
    <h2>${Content}</h2>
    <p>${Date}</p>
    <button><a href="${Url}" target="_blank">READ MORE</a></button>
    </div>
    </div>`;
    }
  });
}
Getdata("cricket");
function Search() {
  let Tab = me.value;
  Getdata(Tab);
}
//
let Start = "";
let c = 1;
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= i; j++) {
    Start += c++ + "";
  }
  Start += "\n";
}
console.log(Start);
let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Arr.slice(2, 4);
//Arr.splice(3, 1, 11, 12, 13);
console.log(Arr);
