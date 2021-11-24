const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('Excepcion no capturada! bajando el servidor...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const puerto = 3000;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('conection successful!');
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log(`Escuchando en 127.0.0.1:${puerto}`);
});

process.on('unhandledRejection', (err) => {
  console.log('Excepcion no manejda! bajando el servidor ...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('Se recibio una señal de apagado. Apagando por la buenas...');
  server.close(() => {
    console.log('Proceso terminado');
  });
});
