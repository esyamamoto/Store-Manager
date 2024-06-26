const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');
const validationProductsName = require('./middlewares/validation');

const app = express();

app.use(express.json());
// reestruturação - mentoria
// Rota para listar todos os produtos
app.get('/products', productsController.getAllProducts);

// Rota para obter um produto por ID
app.get('/products/:id', productsController.getProductById);

// Rota para listar todos  sales
app.get('/sales', salesController.getAllSales);

// Rota para obter sales por ID
app.get('/sales/:id', salesController.getSalesById);

// Rota para criar um novo product
app.post('/products', validationProductsName, productsController.newProductController);

// Rota para criar um novo sale
app.post('/sales', salesController.newSalesController);

// Rota para atualizar um product
app.put('/products/:id', validationProductsName, productsController.updateProductController);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
