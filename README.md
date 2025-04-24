## Prerequitsites

Before running the tests, ensure that the following dependencies are installed:

- Node.js
- npm (Node Package Manager)
- dotenv
- express
- jest
- mysql2
- nodemon

   ```
   npm init
   npm install dotenv express jest mysql2 nodemon
   ```

## Setting Up Environment Variables

This repository provides instructions for setting up environment variables using a `.env` file in an Express.js application. The environment variables will be used in the `db.js` file located in the `src/services` directory.

### Setup

To set up environment variables for your Express.js application, follow these steps:

1. Create a file named `.env` in the root directory of your project.
2. Open the `.env` file and add the following lines:

   ```
   DB_HOST=<your_database_host>
   DB_USER=<your_database_user>
   DB_PASSWORD=<your_database_password>
   DB_DATABASE=<your_database_name>
   ```

   Replace `<your_database_host>`, `<your_database_user>`, `<your_database_password>`, and `<your_database_name>` with the appropriate values for your database connection.

   For example:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=1234
   DB_DATABASE=db
   ```

   Note: Make sure there are no spaces around the equal sign (=) in each line.

3. Save the `.env` file.

## Database Initialization

1. Make sure you have a MySQL database available. Update the database configuration details in the `.env` file.

2. To initialize the database tables and populate them with sample data, open the terminal in VSCode and run the following command:

   ```
   npm run init_tables
   ```

## Start the server

1. To start the server, open terminal in VSCode and run the following command:

   ```
   npm run start
   ```

2. Navigate to localhost:3000 in your browser, then enjoy!