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
  console.log(request.url.split("/")[3]);

//   if (request.url === "/api/products" && request.method === "GET") {
//     response.setHeader("Content-Type", "application/json");
//     response.end(JSON.stringify(products));
//   } else if (request.url === "/api/products/1" && request.method === "GET") {
//     response.setHeader("Content-Type", "application/json");
//     response.end(JSON.stringify(products[0]));
//   } else if (request.url === "/api/products" && request.method === "POST") {
//     console.log("creating new product");
//     let body = "";
//     request.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     request.on("end", () => {
//       const data = JSON.parse(body);
//       const newProduct = {
//         id: products.length + 1,
//         name: data.name,
//         price: data.price,
//         description: data.description,
//         category: data.category,
//       };
//       products.push(newProduct);
//       response.setHeader("Content-Type", "application/json");
//       response.statusCode = 201;
//       response.end(JSON.stringify(newProduct));
//     });
//   } else if (request.url === "/api/products/1" && request.method === "PUT") {
//     console.log("updating product with ID 1");
//     let body = "";
//     request.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     request.on("end", () => {
//       const data = JSON.parse(body);
//       const updatedProduct = {
//         id: id,
//         name: data.name,
//         price: data.price,
//         description: data.description,
//         category: data.category,
//       };
//       products[0] = updatedProduct;
//       response.setHeader("Content-Type", "application/json");
//       response.statusCode = 200;
//       response.end(JSON.stringify(updatedProduct));
//     });
//   } else if (request.url === "/api/products/1" && request.method === "DELETE") {
//     console.log("deleting product with ID 1");
//     products.splice(0, 1);
//     response.setHeader("Content-Type", "application/json");
//     response.statusCode = 200;
//     response.end(JSON.stringify({ message: "Product deleted successfully" }));
//   } else {
//     response.statusCode = 404;
//     response.end(`<html><body><h1>404 Not Found</h1></body></html>`);
//   }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
