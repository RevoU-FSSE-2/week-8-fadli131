"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let products = [
//   { id: 1, name: 'Product A', price: 10 },
//   { id: 2, name: 'Product B', price: 20 },
];
router.get('/products', (req, res) => {
    res.json(products);
});
router.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
router.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
router.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const updatedProduct = {
            id,
            name: req.body.name,
            price: req.body.price,
        };
        products[productIndex] = updatedProduct;
        res.json(updatedProduct);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
router.patch('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const updatedProduct = Object.assign(Object.assign({}, products[productIndex]), req.body);
        products[productIndex] = updatedProduct;
        res.json(updatedProduct);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
router.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1)[0];
        res.json(deletedProduct);
    }
    else {
        res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
});
exports.default = router;
