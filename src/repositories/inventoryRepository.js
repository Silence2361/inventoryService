import { query } from "../db/index.js";

class InventoryRepository {
  async create(productId, shopId, stockOnShelf, stockInOrder) {
    const result = await query(
      `INSERT INTO inventory (product_id, shop_id, stock_on_shelf, stock_in_order) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [productId, shopId, stockOnShelf, stockInOrder]
    );
    return result.rows[0];
  }

  async update(id, stockOnShelf, stockInOrder) {
    const result = await query(
      `UPDATE inventory SET stock_on_shelf = $1, stock_in_order = $2 WHERE id = $3 RETURNING *`,
      [stockOnShelf, stockInOrder, id]
    );
    return result.rows[0];
  }

  async findAll() {
    const result = await query("SELECT * FROM inventory");
    return result.rows;
  }

  async findByProduct(productId) {
    const result = await query(
      "SELECT * FROM inventory WHERE product_id = $1",
      [productId]
    );
    return result.rows[0];
  }
}

export default new InventoryRepository();
