import { gql } from '@apollo/client';

export const SIGNIN = gql`
  mutation Login($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials){
      accessToken
    }
  }
`;