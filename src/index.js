const express = require('express');
const morgan =require('morgan');
const path= require('path')

const app= express();


//settngs
app.set('port' , process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks' ,require('./routes/task.routes'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Iniciando el servidor
app.listen( app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`);
});