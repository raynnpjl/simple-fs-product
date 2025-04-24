const db = require("../config/db");

module.exports = {
    async getAllProducts() {
        const [result] = await db.query('SELECT * FROM products');
        return result;
    },

    async createProduct() {
        const [result] = await db.query('INSERT INTO products (product_name, brand, category_id, image_url');
        return result.insertId;
    },

    async updateProduct(product_id, product_name, brand, image_url) {
        await db.query('UPDATE products SET product_name = ?, brand = ?, image_url = ? WHERE product_id = ?', [product_name, brand, image_url, product_id]);
    },

    async deleteProduct(product_id) {
        await db.query('DELETE FROM products WHERE product_id = ?', [product_id]);
    }
}