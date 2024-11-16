import { query } from "../db/index.js";

class ProductRepository {
  async create(name, plu) {
    const result = await query(
      "INSERT INTO products (name, plu) VALUES ($1, $2) RETURNING *",
      [name, plu]
    );
    return result.rows[0];
  }

  async findAll() {
    const result = await query("SELECT * FROM products");
    return result.rows;
  }

  async findById(id) {
    const result = await query("SELECT * FROM products WHERE id = $1", [id]);
    return result.rows[0];
  }
}

export default new ProductRepository();
