// required libraries
const express = require('express');
const graphHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');

// define port and express app object
const port = 5000;
const app = express();

// define the Schema
const schema =  new GraphQLSchema({ query: queryType});

// setup nodejs GraphQL server
app.use('/graphql', graphHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost: ${port}`);