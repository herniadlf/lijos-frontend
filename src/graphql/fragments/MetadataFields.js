import { gql } from "@apollo/client";

export const MetadataFields = gql`
  fragment MetadataFields on MetadataOutput {
    name
    description
    content
    image
    attributes {
      traitType
      value
      __typename
    }
    tags
    cover {
      original {
        url
        __typename
      }
      __typename
    }
    media {
      original {
        url
        mimeType
        __typename
      }
      __typename
    }
    __typename
  }
`;
