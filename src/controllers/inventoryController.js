import inventoryService from "../services/inventoryService.js";

export const createInventory = async (req, res, next) => {
  const { productId, shopId, stockOnShelf, stockInOrder } = req.body;
  inventoryService
    .createInventory(productId, shopId, stockOnShelf, stockInOrder)
    .then((inventory) => res.status(201).json(inventory))
    .catch(next);
};

export const updateInventory = async (req, res, next) => {
  const { id, stockOnShelf, stockInOrder } = req.body;
  inventoryService
    .updateInventory(id, stockOnShelf, stockInOrder)
    .then((updatedInventory) => res.status(200).json(updatedInventory))
    .catch(next);
};
