import React from 'react';
import RepositoryItem from '../RepositoryItem';

const RepositoryInfo = ({ repository }) => {
    return <RepositoryItem view="single" item={repository} />;
};

export default RepositoryInfo;