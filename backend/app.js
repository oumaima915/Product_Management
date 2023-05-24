const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');
require('dotenv/config');
//  const authJwt = require('./helpers/jwt');
// const errorHandler = require('./helpers/error-handler');

const api=process.env.API_URL;
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');


app.use(bodyParser.json());
app.use(morgan('tiny'));
//  app.use(authJwt());
// app.use(errorHandler);



app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);const Product=require('./models/product');


mongoose.connect(process.env.CONNECTION_STRING,{
    dbName:'eshop-database'

})
.then(()=>{
    console.log('Database connection is ready...')
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log('server is running http://localhost:3000');

})
