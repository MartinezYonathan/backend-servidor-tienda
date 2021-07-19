const express = require('express')
const db = require('./queries')
var cors = require('cors')

const app = express();
const bodyparser = require('body-parser');

app.use(cors())

/*assuming an express app is declared here*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
/**
 * Settings VAPID
 */

app.get('/api/productos', db.getProductos)
app.post('/api/producto', db.createProducto)
app.get('/api/producto/:barcode', db.getProductoBybarcode)
app.delete('/api/producto/:id', db.deleteProducto)
app.put('/api/producto/:id', db.updateProducto)

app.post('/api/producto/update', db.createProductoUpdate)
app.get('/api/productos/update', db.getProductosUpdate)

const PORT = process.env.PORT || 9000;
const httpServer = app.listen(PORT, () => {
    console.log("HTTP Server running at listening on port " + httpServer.address().port);
});
