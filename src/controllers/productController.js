const productModel = require('../models/productModel');
const userModel = require('../models/productModel');
const responseView = require('../views/responseView');

module.exports = {
    async listProducts(req, res) {
        try {
            const products = await productModel.getAllProducts();
            responseView.sendSuccess(res, products);
        } catch (err) {
            responseView.sendError(res, 'Failed to fetch products', err);
        }
    },

    async createProduct(req, res) {
        try {
            if (req.body.product_name == undefined) {
                responseView.BadRequest(res, 'Missing product name');
                return;
            }

            if (req.body.brand == undefined) {
                responseView.BadRequest(res, 'Missing brand');
                return;
            }

            if (req.body.category_id == undefined) {
                responseView.BadRequest(res, 'Missing category id');
                return;
            }

            if (req.body.image_url == undefined) {
                responseView.BadRequest(res, 'Missing image url');
                return;
            }

            const product_name = req.body.product_name;
            const brand = req.body.brand;
            const category_id = req.body.category_id;
            const image_url = req.body.image_url;

            const product_id = await productModel.createProduct(product_name, brand, category_id, image_url);
        } catch (err) {
            responseView.sendError(res, 'Failed to create product', err);
        }
    },

    async updateProduct(req, res) {
        try {
            if (req.params.product_id == undefined) {
                responseView.BadRequest(res, 'Missing product id');
                return;
            }

            if (req.body.product_name == undefined) {
                responseView.BadRequest(res, 'Missing product name');
                return;
            }

            if (req.body.brand == undefined) {
                responseView.BadRequest(res, 'Missing brand');
                return;
            }

            if (req.body.image_url == undefined) {
                responseView.BadRequest(res, 'Missing image url');
                return;
            }

            const product_id = req.params.product_id;
            const product_name = req.body.product_name;
            const brand = req.body.brand;
            const image_url = req.body.image_url;

            await productModel.updateProduct(product_id, product_name, brand, image_url);
            responseView.sendSuccess(res, {id: req.params.product_id, product_name, brand, image_url}, 'Product update successfully');
        } catch (err) {
            responseView.sendError(res, 'Failed to update product', err)
        }
    }, 
    async deleteProduct(req, res) {
        try {
            await userModel.deleteProduct(req.params.product_id);
            responseView.sendSuccess(res, null, 'Product deleted successfully');
        } catch (err) {
            responseView.sendError(res, 'Failed to delete user', err);
        }
    }
}