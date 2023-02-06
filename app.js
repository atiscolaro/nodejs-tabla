const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


crearArchivo(argv.b, argv.l, argv.h)
   .then(nombreArchivo => console.log(nombreArchivo.random, 'creado'))
   .catch( err => console.log(err) );