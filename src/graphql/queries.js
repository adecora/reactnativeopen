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
  query Me {
    me {
      username
      id
    }
  }
`;

export const GET_REPOSITORY = gql`
${REPOSITORY_FIELDS}
query Repository ($id: ID!) {
  repository (id: $id) {
    ...RepositoryFields
    url
  }
}
`;