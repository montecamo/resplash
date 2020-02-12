import { gql } from 'apollo-boost';

export const GET_OVERLAYS = gql`
  {
    overlays @client {
      id
    }
  }
`;

export const OPEN_OVERLAY = gql`
  mutation OpenOverlay($id: ID!) {
    openOverlay(id: $id) @client
  }
`;

export const CLOSE_OVERLAY = gql`
  mutation CloseOverlay($id: ID!) {
    closeOverlay(id: $id) @client
  }
`;
