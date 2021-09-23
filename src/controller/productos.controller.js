// import express from 'express';
// import productos from '../models/productos';
import { variosProductos } from '../models/productos.fake';

class Controller {
  async testProductos(req, res) {
    const salida = variosProductos(req.query.cant);
    if (salida.length === 0) {
      res.json({ msg: 'No hay productos' });
    }
    res.json(salida);
  }
}

export default new Controller();
