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

const PORT = process.env.PORT || 9000;
const httpServer = app.listen(PORT, () => {
    console.log("HTTP Server running at listening on port " + httpServer.address().port);
});
