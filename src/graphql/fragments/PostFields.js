import { gql } from "@apollo/client";

export const PostFields = gql`
  fragment PostFields on Post {
    id
    metadata {
      ...MetadataFields
      __typename
    }
    hidden
    createdAt
    appId
    __typename
  }
`;
