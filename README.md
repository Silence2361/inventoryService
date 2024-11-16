# Install dependencies

npm install

# Set up the environment variables

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=inventory

# Set up the database

CREATE DATABASE inventory;

# Database Schema

CREATE TABLE inventory (
id SERIAL PRIMARY KEY,
product_id INTEGER NOT NULL,
shop_id INTEGER NOT NULL,
stock_on_shelf INTEGER NOT NULL CHECK (stock_on_shelf >= 0),
stock_in_order INTEGER NOT NULL CHECK (stock_in_order >= 0),
UNIQUE (product_id, shop_id)
);

# Apply migrations

psql -U postgres -d inventory -f migrations/001-create-products.sql
psql -U postgres -d inventory -f migrations/002-create-inventory.sql

# Running the Service

npm run dev
