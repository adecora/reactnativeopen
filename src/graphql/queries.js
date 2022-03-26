import { gql } from '@apollo/client';

const REPOSITORY_FIELDS = gql`
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

const USER_INFO = gql`
  fragment UserInfo on User {
    id
    username
  }
`;

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query Repositories {
    repositories {
      edges {
        node {
          ...RepositoryFields
        }
      }
    }
  }
`;

export const ME = gql`
  ${USER_INFO}
  query Me {
    me {
      ...UserInfo
    }
  }
`;

export const GET_REPOSITORY = gql`
${REPOSITORY_FIELDS}
${USER_INFO}
query Repository ($id: ID!) {
  repository (id: $id) {
    ...RepositoryFields
    url
    reviews {
      edges {
      node {
        id
        createdAt
        text
        rating
        user {
          ...UserInfo
        }
      }
    }
    }
  }
}
`;