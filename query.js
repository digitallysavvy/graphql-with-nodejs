
const { GraphQLObjectType, GraphQLString } = require('graphql');

// define the query
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: function () {
        return "Hello World";
      }
    }, 
    world: {
      type: GraphQLString,
      resolve: function () {
        return "World Hello";
      }
    }
  }
});

exports.queryType = queryType;