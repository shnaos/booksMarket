import { Product } from "../entities/product.js";
export class ProductService {
  constructor() {}
  async getApi() {
    // Utilisez `await` pour attendre que la requête soit résolue
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    // Transformez les données en instances de la classe Product
    const products = data.map((element) => {
      return new Product(
        element.id,
        element.title,
        element.price,
        element.image,
        element.description
      );
    });

    return products; // Renvoie les données sous forme de tableau
  }

  async getProducts() {
    return this.getApi();
  }
}
