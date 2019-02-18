const {
  GraphQLObjecType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql');

// define movieType
movieType = new GraphQLObjecType({
  name: 'Movie',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    directorId: { type: GraphQLID }
  }
});

exports.movieType = movieType;