import { gql } from "@apollo/client";

export const CommentFields = gql`
  fragment CommentFields on Comment {
    id
    profile {
      ...ProfileFields
      __typename
    }
    metadata {
      ...MetadataFields
      __typename
    }
    createdAt
    commentOn {
      ... on Post {
        ...PostFields
        __typename
      }
      ... on Comment {
        id
        profile {
          ...ProfileFields
          __typename
        }
        metadata {
          ...MetadataFields
          __typename
        }
        mainPost {
          ... on Post {
            ...PostFields
            __typename
          }
          __typename
        }
        hidden
        createdAt
        __typename
      }
      __typename
    }
    __typename
  }
`;
