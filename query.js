
const { GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt 
} = require('graphql');

const _ = require('lodash');

const {movieType} = require('./types.js');
let {movies} = require('./data.js');

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
    },
    movie: {
      type: movieType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: function (source, args) {
        return _.find(movies, { id: args.id });
      }
    }
  }
});

exports.queryType = queryType;