import { gql } from '@apollo/client';

import {  USER_INFO } from './fragments';

export const SIGNIN = gql`
  mutation Login($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials){
      accessToken
    }
  }
`;

export const REVIEW = gql`
${USER_INFO}
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    user {
      ...UserInfo
    }
    id
    userId
    repositoryId
    rating
    createdAt
    text
  }
}
`;

export const SIGNUP = gql`
${USER_INFO}
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    ...UserInfo
  }
}
`;