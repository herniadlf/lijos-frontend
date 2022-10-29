import { gql } from "@apollo/client";
import { MetadataFields } from "../fragments/MetadataFields";
import { PostFields } from "../fragments/PostFields";
import { CommentFields } from "../fragments/CommentFields";
import { ProfileFields } from "../fragments/ProfileFields";

export const CommentFeedQuery = gql`
  query CommentFeed($request: PublicationsQueryRequest!) {
    publications(request: $request) {
      items {
        ... on Comment {
          ...CommentFields
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
  ${CommentFields}
  ${ProfileFields}
  ${PostFields}
  ${MetadataFields}
`;
