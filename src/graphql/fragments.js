import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;

export const USER_INFO = gql`
  fragment UserInfo on User {
    id
    username
  }
`;

export const PAGE_INFO = gql`
  fragment PageInfoFields on PageInfo {
    startCursor
    endCursor
    hasNextPage
  }
`;