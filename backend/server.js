const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const db = require('./models');
const userSchema = require('./userSchema');
const userResolver = require('./userResolver');
const app = express();
const port = 5000;
app.use('/graphql', graphqlHTTP({
    schema: userSchema,
    rootValue: userResolver,
    graphiql: true
    }));
    app.use(bodyParser.json());
