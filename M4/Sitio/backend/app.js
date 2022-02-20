var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('dotenv').config();
var pool = require('./models/bd');
var session = require('express-session');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// la dirección que se requiere para acceder al contenido de index.js
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var apiRouter = require('./routes/api');

const res = require('express/lib/response');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// //select
// pool.query("select * from empleados").then(function(resultados){
//   console.log(resultados);
// });

//insert
// var obj = {
//   nombre:'Juan',
//   apellido:'Lopez',
//   trabajo: 'docente',
//   edad:38,
//   salario: 1500,
//   mail: 'juanlopez@gmail.com'
// }

// pool.query('insert into empleados set ?', [obj]).then(function (resultados){
//   console.log(resultados);
// });

// //update
// var id = 1;
// var obj = {
//   nombre: 'Pablo',
//   apellido: 'Gomez',
// }

// pool.query('update empleados set ? where id_emp =?', [obj, id]).then(function(resultados){
//   console.log(resultados);
// });

//delete
// var id = 24;
// pool.query('delete from empleados where id_emp=?', [id]).then(function(resultados){
//   console.log(resultados);
// });

// Sesiones

// app.use(session({
//   secret: 'asdasdasdasd',
//   resave: false,
//   saveUninitialized: true
// }));

// app.get('/sesiones', function (req, res) {
//   var conocido = Boolean(req.session.nombre);

//   res.render('index', {
//     title: 'Sesiones en Express.js',
//     conocido: conocido,
//     nombre: req.session.nombre
//   });
// });


// app.post('/ingresar', function (req, res) {
//   if (req.body.nombre) {
//     req.session.nombre = req.body.nombre
//   }
//   res.redirect('/sesiones');
// });

// app.get('/salir', function (req, res) {
//   req.session.destroy();
//   res.redirect('/sesiones');
// });

app.use(session({
  secret: 'PW2022awqyeudj',
  resave: false,
  saveUninitialized: true
}))


secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
    res.redirect('/admin/login');
    } //cierra else
  } catch (error) {
    console.log(error);
  }  //cierra catch error
} //cierra secured



app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
// cuando utilicemos la ruta /admin/login vamos a utilizar loginRouter
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter);
app.use('/api', cors(),apiRouter);


// //select
// pool.query('select * from empleados').then(function(resultados){
//   console.log(resultados)
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
