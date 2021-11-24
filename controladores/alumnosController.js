// const Alumno = require('./../models/alumnosModel');
// const express = require('express');
// const fs = require('fs');

// const alumnos = JSON.parse(
//   fs.readFileSync('./dev-data/data/data.json', 'utf-8')
// );

// exports.chekId = (req, res, next) => {
//   const ids = alumnos.map((alu) => alu.id);
//   const existe = ids.findIndex((id) => id === Number(req.params.id));
//   if (existe === -1) {
//     return res.status(404).json({
//       status: 'failure',
//       data: null,
//     });
//   }
//   console.log(ids, existe);
//   next();
// };

// exports.mostrarAlumnos = (req, res) => {
//   console.log('Todos los alumnos');
//   res.status(200).json({
//     status: 'success',
//     data: {
//       alumnos,
//     },
//   });
// };

// exports.crearAlumno = (req, res) => {
//   const id = alumnos.length === 0 ? 1 : alumnos[alumnos.length - 1].id + 1;
//   // console.log(id, req.body);
//   req.body.id = id;
//   alumnos.push(req.body);
//   fs.writeFile('./dev-data/data/data.json', JSON.stringify(alumnos), (err) => {
//     res.status(201).json({
//       status: 'success',
//       data: req.body,
//     });
//   });
// };

// exports.mostarAlumno = (req, res) => {
//   const alumno = alumnos.find((alu) => alu.id === Number(req.params.id));
//   if (alumno) {
//     console.log(`Mostrar alumno ${req.params.id}`);
//     res.status(200).json({
//       status: 'success',
//       data: alumno,
//     });
//   }
// };

// exports.actualizarAlumno = (req, res) => {
//   const alumno = alumnos.find((alu) => alu.id === Number(req.params.id));
//   if (alumno) {
//     Object.assign(alumno, req.body);

//     fs.writeFile('./dev-data/data.json', JSON.stringify(alumnos), (err) => {
//       console.log(`Mostrar alumno ${req.params.id}`);
//       res.status(200).json({
//         status: 'success',
//         data: alumno,
//       });
//     });
//   }
// };

// exports.eliminarAlumno = (req, res) => {
//   const idx = alumnos.find((alu) => alu.id === Number(req.params.id));
//   if (alumnos[idx]) {
//     alumnos.splice(idx, 1);
//     Object.assign(alumno, req.body);

//     fs.writeFile('./dev-data/data.json', JSON.stringify(alumnos), (err) => {
//       console.log(`Mostrar alumno ${req.params.id}`);
//       res.status(200).json({
//         status: 'success',
//         data: null,
//       });
//     });
//   }
// };

// exports.mostrarAlumnos = async (req, res) => {
//   try {
//     // 1 filtros
//     let queryObj = { ...req.query };
//     const excludeFields = ['sort', 'limit', 'fields', 'page'];
//     excludeFields.forEach((elem) => delete queryObj[elem]);
//     let queryString = JSON.stringify(queryObj);
//     queryString = queryString.replace(
//       /\b(lt|lte|gt|gte)\b/g,
//       (match) => `$${match}`
//     );
//     let query = Alumno.find(JSON.parse(queryString));

//     // 2 ordenar
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(',').join(' ');
//       query.sort(sortBy);
//     } else {
//       query = query.sort('apellido nombres');
//     }

//     // 3 limit/projecting
//     if (req.query.fields) {
//       const campos = req.query.fields.split(',').join(' ');
//       query = query.select(campos);
//     } else {
//       query = query.select('-_id -__v');
//     }

//     // 4 paginacion

//     const pagina = req.query.page ? req.query.page * 1 : 1;
//     const cantidad = req.query.limit ? req.query.limit * 1 : 10;
//     const desde = (pagina - 1) * cantidad;
//     const hasta = desde + cantidad;

//     query = query.skip(desde).limit(hasta);
//     // const query = Alumno.find()
//     //   .where('edad')
//     //   .equals(23)
//     //   .where('nombre')
//     //   .equals('agustin');

//     const alumnos = await query;
//     // console.log(req.query);

//     res.json({
//       status: 'success',
//       data: {
//         data: alumnos,
//       },
//     });
//   } catch (err) {
//     res.json({
//       status: 'fail',
//       message: err.message,
//     });
//   }
// };

// exports.crearAlumno = async (req, res) => {
//   try {
//     const nuevoAlumno = await Alumno.create(req.body);
//     res.json({
//       status: 'success',
//       data: {
//         alumno: nuevoAlumno,
//       },
//     });
//   } catch (err) {
//     res.json({
//       status: 'fail',
//       message: err.message,
//     });
//   }
// };

// exports.mostrarAlumno = async (req, res) => {
//   try {
//     const alumno = await Alumno.findById(req.params.id);
//     res.json({
//       status: 'success',
//       data: {
//         alumno,
//       },
//     });
//   } catch (err) {
//     res.json({
//       status: 'fail',
//       message: 'Datos incorrectos!',
//     });
//   }
// };

// exports.actualizarAlumno = async (req, res) => {
//   try {
//     const alumno = await Alumno.findIdByAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json({
//       status: 'success',
//       data: alumno,
//     });
//   } catch (error) {
//     res.json({
//       status: 'fail',
//       message: 'Datos incorrectos!',
//     });
//   }
// };

// exports.eliminarAlumno = async (req, res) => {
//   try {
//     await Alumno.findByIdAndDelete(req.params.id);
//     res.json({
//       status: 'success',
//       data: 'nada que mostrar',
//     });
//   } catch (err) {
//     res.json({
//       status: 'fail',
//       message: 'Datos incorrectos',
//     });
//   }
// };
