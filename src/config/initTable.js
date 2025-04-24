const db = require("./db.js");

(async () => {
    try {
        const SQLSTATEMENT = `
        DROP TABLE IF EXISTS categories;
        CREATE TABLE categories (
            category_id INT AUTO_INCREMENT PRIMARY KEY,
            category_name TEXT NOT NULL,
            category_desc TEXT NOT NULL
        );

        INSERT INTO categories (category_name, category_desc)
        VALUES 
            ('food', 'general food'),
            ('toy', 'fun to play with'),
            ('appliance', 'house appliance');
        
        DROP TABLE IF EXISTS products;
        CREATE TABLE products (
            product_id INT AUTO_INCREMENT PRIMARY KEY,
            product_name TEXT NOT NULL,
            brand TEXT NOT NULL,
            category_id INT NOT NULL,
            image_url TEXT NOT NULL,
            product_date TIMESTAMP,
            FOREIGN KEY (category_id) REFERENCES categories(category_id)
        );
        `

        await db.query(SQLSTATEMENT)
        console.log('Tables has been created successfully')
        process.exit()
    } catch (err) {
        console.error("Tables operation error:", err)
        process.exit()
    }
})();