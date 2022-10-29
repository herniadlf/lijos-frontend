import { gql } from "@apollo/client";
import { MetadataFields } from "../fragments/MetadataFields";
import { PostFields } from "../fragments/PostFields";

export const ProfileFeedQuery = gql`
  query ProfileFeed($request: PublicationsQueryRequest!) {
    publications(request: $request) {
      items {
        ... on Post {
          ...PostFields
          __typename
        }
        __typename
      }
      pageInfo {
        totalCount
        next
        __typename
      }
      __typename
    }
  }

  ${PostFields}
  ${MetadataFields}
`;
