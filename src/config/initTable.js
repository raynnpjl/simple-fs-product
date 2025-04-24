const db = require("./db.js");

(async () => {
    try {
        const SQLSTATEMENT = `
        DROP TABLE IF EXISTS products;
        CREATE TABLE products (
            product_id INT AUTO_INCREMENT PRIMARY KEY,
            product_name TEXT NOT NULL,
            brand TEXT NOT NULL,
            FOREIGN KEY (category_id) REFERENCES categories(category_id),
            image_url TEXT NOT NULL,
            product_date TIMESTAMP
        );

        DROP TABLE IF EXISTS categories;
        CREATE TABLE categories (
            category_id INT AUTO_INCREMENT PRIMARY KEY,
            category_name TEXT NOT NULL,
            category_desc TEXT NOT NULL
        );

        INSERT INTO categories (name, description)
        VALUES 
            ('food', 'general food'),
            ('toy', 'fun to play with'),
            ('appliance', 'house appliance');
        `

        await db.query(SQLSTATEMENT)
        console.log('Tables has been created successfully')
        process.exit()
    } catch (err) {
        console.error("Tables operation error:", err)
        process.exit()
    }
})();