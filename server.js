const knex = require('knex')(require('./knexfile'));
const express = require('express');
const path = require('path');

const app = express();
// ... other dependencies ...

// Middleware to serve static files from the 'public' directory

app.use(express.static(path.join(__dirname, './public')));

// ... your routes ...
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/products', async (req, res) => {
    try {
        const products = await knex('products').select('*');
        res.json(products);
    } catch (error) {
        res.status(500).json({message: "Error fetching products"});
    }
});



