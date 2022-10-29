import { gql } from "@apollo/client";

export const ProfileFields = gql`
  fragment ProfileFields on Profile {
    id
    name
    handle
    picture {
      ... on MediaSet {
        original {
          url
          __typename
        }
        __typename
      }
      ... on NftImage {
        uri
        __typename
      }
      __typename
    }
    __typename
  }
`;
