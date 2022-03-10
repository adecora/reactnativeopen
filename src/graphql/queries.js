import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;