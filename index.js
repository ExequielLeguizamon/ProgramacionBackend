const express = require('express')
const classContainer = require('./Contenedor/Contenedor')
const app = express();
const PORT = 8080
const archivo = new classContainer('./productos.txt')

app.get('/productos', async (req, res) => {

    const prods = await archivo.getAll()

    res.send({Productos: prods})
})

app.get('/random', async(req, res) => {

    const prods = await archivo.getAll()
    const random = parseInt(Math.random()* prods.length)
    res.send({Productos: prods[random]})
})



const server =app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en puerto: ${PORT}`);
})
