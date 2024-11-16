import inventoryRepository from "../repositories/inventoryRepository.js";
import productRepository from "../repositories/productRepository.js";
import historyClient from "./historyClient.js";

class InventoryService {
  async createInventory(productId, shopId, stockOnShelf, stockInOrder) {
    const product = await productRepository.findById(productId);

    if (!product) {
      throw new Error(`Product with id ${productId} not found`);
    }

    const existingInventory = await inventoryRepository.findByProduct(
      productId
    );

    if (existingInventory) {
      throw new Error(`Inventory for product ${productId} already exists`);
    }

    if (!productId || !shopId) {
      throw new Error("Product ID and Shop ID are required");
    }

    const inventory = await inventoryRepository.create(
      productId,
      shopId,
      stockOnShelf,
      stockInOrder
    );

    await historyClient.logAction(
      "create",
      productId,
      shopId,
      stockOnShelf,
      stockInOrder
    );

    return inventory;
  }

  async updateInventory(id, stockOnShelf, stockInOrder) {
    const inventory = await inventoryRepository.findAll();
    const record = inventory.find((item) => item.id === id);
    if (!record) {
      throw new Error(`Inventory record with id ${id} not found`);
    }

    const updatedInventory = await inventoryRepository.update(
      id,
      stockOnShelf,
      stockInOrder
    );

    await historyClient.logAction(
      "update",
      record.productId,
      record.shopId,
      stockOnShelf,
      stockInOrder
    );

    return updatedInventory;
  }

  async getInventory() {
    return await inventoryRepository.findAll();
  }
}

export default new InventoryService();
