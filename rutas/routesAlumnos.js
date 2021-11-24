const express = require('express');
const controller = require('./../controllers/alumnosController');

const routerAlumnos = express.Router();

routerAlumnos
  .route('/listado-filtrado')
  .get(controller.listadoFiltrado, controller.mostrarAlumnos);

routerAlumnos
  .route('/')
  .get(controller.mostrarAlumnos)
  .post(controller.crearAlumno);
routerAlumnos
  .route('/:id')
  .get(controller.mostrarAlumno)
  .patch(controller.actualizarAlumno)
  .delete(controller.eliminarAlumno);

module.exports = routerAlumnos;
