export default `
  extend type Mutation {
    openOverlay(id: ID!)
    closeOverlay(id: ID!)
  }

  type Overlay {
    id: ID!
  }

  extend type Query {
    overlays: [Overlay]
  }
`;
