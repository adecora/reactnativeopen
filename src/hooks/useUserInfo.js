import { useNavigate } from 'react-router-native';
import { useQuery, useApolloClient } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';
import { ME } from '../graphql/queries';

const useUserInfo = () => {
    const { data } = useQuery(ME, {
        fetchPolicy: 'cache-and-network',
    });
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const navigate = useNavigate();

    const me =  data
        ? data.me
        : data;
    
    const signOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
        navigate('/', { replace: true });
    };

    return [signOut, me];
};

export default useUserInfo;