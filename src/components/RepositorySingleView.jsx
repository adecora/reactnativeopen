import React from 'react';
import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepositoryView';


const RepositorySingleView = () => {
    let { id } = useParams();
    const { repository } = useRepository(id);

    if(!repository) {
        return null;
    }

    return <RepositoryItem view="single" item={repository} />;
};

export default RepositorySingleView;