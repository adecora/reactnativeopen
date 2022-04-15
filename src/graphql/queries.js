import { gql } from '@apollo/client';

import { REPOSITORY_FIELDS, USER_INFO, PAGE_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  ${PAGE_INFO}
  query Repositories (
    $first: Int,
    $after: String,
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection,
    $searchKeyword: String
    ){
    repositories (
      first: $first,
      after: $after,
      orderBy: $orderBy, 
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
      ){
      edges {
        node {
          ...RepositoryFields
        }
        cursor
      }
      pageInfo {
        ...PageInfoFields
      }
    }
  }
`;

export const ME = gql`
  ${USER_INFO}
  ${PAGE_INFO}
  query Me (
    $first: Int,
    $after: String,
    $includeReviews: Boolean = false,
    ) {
    me {
      ...UserInfo
      reviews 
        (first: $first, after: $after)
        @include(if: $includeReviews){
          totalCount
          edges {
            node {
              id
              createdAt
              text
              rating
              repository {
                fullName
              }
              user {
                ...UserInfo
            }
          }
          cursor
          }
          pageInfo {
            ...PageInfoFields
          }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
${REPOSITORY_FIELDS}
${USER_INFO}
${PAGE_INFO}
query Repository (
  $first: Int,
  $after: String,
  $id: ID!,
  ) {
  repository (id: $id) {
    ...RepositoryFields
    url
    reviews (first: $first, after: $after){
      totalCount
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
      cursor
      }
      pageInfo {
        ...PageInfoFields
      }
    }
  }
}
`;