import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order, searchKeyword) => {
  const variables = {
    ...order,
    searchKeyword,
  };

  const {  data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  return { 
    repositories: data?.repositories, 
    loading,
    error
  };
};

export default useRepositories;