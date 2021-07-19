const Pool = require('pg').Pool

const pool = new Pool({
    user: 'htfaejadgariie',
    host: 'ec2-54-83-82-187.compute-1.amazonaws.com',
    password: 'a6449073e7714aa5fc1626f83ee1c82d06bafcd2b1c6c02707f0f59d7f1d4dec',
    database: 'd28qqt7ihqg30g',
    port: '5432',
    ssl: true,
    dialect: 'postgres',
  dialectOptions: {
    "ssl": {"require":true }
  }
});
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
pool.connect();


const createProducto = (request, response) => {
  const { nombre, descripcion, tamanio, precio, barcode, inventario } = request.body

  pool.query('INSERT INTO producto (nombre, descripcion, tamanio, precio, barcode, inventario) VALUES ($1, $2, $3, $4, $5, $6)', [nombre, descripcion, tamanio, precio, barcode, inventario], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Producto agregado`)
  })
}


const getProductoBybarcode = (request, response) => {
  const barcode = (request.params.barcode)

  pool.query('SELECT * FROM producto WHERE barcode = $1', [barcode], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductos = (request, response) => {
  pool.query('SELECT * FROM  producto', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const updateProducto = (request, response) => {
  const id = parseInt(request.params.id)
  const { nombre, descripcion, tamanio, precio, inventario } = request.body

  pool.query(
    'UPDATE producto SET nombre = $1, descripcion = $2, tamanio = $3, precio = $4, inventario = $5 WHERE id = $6',
    [nombre, descripcion, tamanio, precio, inventario, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`producto modified with ID: ${id}`)
    }
  )
}

const deleteProducto = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM producto WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}



module.exports = {
    createProducto,
    getProductoBybarcode,
    getProductos,
    updateProducto,
    deleteProducto
}
  

