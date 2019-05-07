const { gql } = require('apollo-server');

const typeDefs = gql`
  type PhotoUrls {
    regular: String!
  }

  type Photo {
    id: ID!
    urls: PhotoUrls
  }

  type Query {
    photos: [Photo]
  }
`;

module.exports = typeDefs;
