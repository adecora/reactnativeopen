import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderObj) => {
  const {  data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables: orderObj,
    fetchPolicy: 'cache-and-network',
  });

  return { 
    repositories: data?.repositories, 
    loading,
    error
  };
};

export default useRepositories;