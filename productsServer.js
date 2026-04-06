const { cp } = require("fs");
const http = require("http");

const PORT = 3000;

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 100,
    description: "description 1",
    category: "category 1",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 200,
    description: "description 2",
    category: "category 2",
  },
  {
    id: 3,
    name: "Headphones",
    price: 300,
    description: "description 3",
    category: "category 3",
  },
];

const server = http.createServer((request, response) => {
  console.log("Request URL: " + request.url);
  console.log("Request Method: " + request.method);
  let productId = request.url.split("/")[3];
  console.log("Product ID: " + productId);

  let productIndex = products.findIndex((p) => p.id === parseInt(productId));
  console.log("Product Index: " + productIndex);

  response.setHeader("Content-Type", "application/json");
  response.statusCode = 200;
  response.end(JSON.stringify(products[productIndex]));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
