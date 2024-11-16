CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  shop_id INT NOT NULL,
  stock_on_shelf INT DEFAULT 0,
  stock_in_order INT DEFAULT 0
);
