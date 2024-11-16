import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const HISTORY_SERVICE_URL = "http://localhost:4000/api/history";

class HistoryClient {
  async logAction(action, productId, shopId, stockOnShelf, stockInOrder) {
    try {
      const response = await axios.post(HISTORY_SERVICE_URL, {
        action,
        productId,
        shopId,
        stockOnShelf,
        stockInOrder,
      });
      return response.data;
    } catch (error) {
      console.error("Error communicating with History Service:", error.message);
      throw new Error("Failed to log action to History Service");
    }
  }
}

export default new HistoryClient();
