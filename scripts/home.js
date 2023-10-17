import { ProductService } from "../services/productService.js";
const productService = new ProductService();
productService.getProducts().then((products) => {
  const divProductsList = document.getElementById("productsList");
  console.log("blip");
  for (const product of products) {
    console.log(product);
    const div = document.createElement("div");
    div.classList.add("image");
    div.innerHTML = `<a href="info.html"><img src="${product.image}" class="livre"></a><p>${product.price}$<br>${product.title}</p>`;
    divProductsList.appendChild(div);
  }
});