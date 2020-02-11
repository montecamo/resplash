const { gql } = require('apollo-server');

const typeDefs = gql`
  type PhotoUrls {
    regular: String!
  }

  type Photo {
    id: ID!
    height: Int!
    width: Int!
    urls: PhotoUrls
  }

  type Query {
    photos(page: Int): [Photo]
  }
`;

module.exports = typeDefs;
