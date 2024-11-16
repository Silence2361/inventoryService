import productRepository from "../repositories/productRepository.js";

class ProductService {
  async createProduct(name, plu) {
    if (!name || !plu) {
      throw new Error("Name and PLU are required");
    }
    return await productRepository.create(name, plu);
  }

  async getProducts() {
    return await productRepository.findAll();
  }

  async getProductById(id) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }
}

export default new ProductService();