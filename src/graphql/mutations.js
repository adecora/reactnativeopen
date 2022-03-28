import { gql } from '@apollo/client';

export const SIGNIN = gql`
  mutation Login($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials){
      accessToken
    }
  }
`;

export const REVIEW = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    user {
      id
      username
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