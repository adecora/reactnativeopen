import { gql } from '@apollo/client';

import { REPOSITORY_FIELDS, USER_INFO } from './fragments';

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