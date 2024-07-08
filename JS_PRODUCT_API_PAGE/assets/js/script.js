//JS STARTS FROM HERE

var apiUrl = "https://dummyjson.com/products";
var productData = [];

let itemsPerPage = 12;
let currentPage = 1;

async function dataTable() {
  await productTable();
  console.log(productData);

  const pages = [];
  for (i = 0; i <= Math.ceil(productData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentItems = productData.slice(indexOfFirstPage, indexOfLastPage);

  document.getElementById("NewsContainer").innerHTML = currentItems
    .map(
      (products) =>
        `
      <div class="card">
    <img src="${products.images[0]}"/>
    <div class="Content">
    <h2>${products.title.slice(0, 18)}...</h2>
    <p>${products.category}</p>
    </div>
    </div>
    `
    )
    .join("");
}
dataTable();

const prevButton = () => {
  if ((currentPage - 1) * itemsPerPage) {
    currentPage--;
    dataTable();
  }
};
const nextButton = () => {
  if ((currentPage * itemsPerPage) / productData.length) {
    currentPage++;
    dataTable();
  }
};

document.getElementById("prev").addEventListener("click", prevButton, false);
document.getElementById("next").addEventListener("click", nextButton, false);
async function productTable() {
  let Data = await fetch(apiUrl);
  let res = await Data.json();
  productData = res.products;
  console.log(productData);
}
//productTable();
