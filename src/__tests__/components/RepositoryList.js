import React from 'react';
import { RepositoryListContainer  } from "../../components/RepositoryList";
import { render, within } from '@testing-library/react-native';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                  hasNextPage: true,
                  endCursor:
                    'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                  startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                  {
                    node: {
                      id: 'jaredpalmer.formik',
                      fullName: 'jaredpalmer/formik',
                      description: 'Build forms in React, without the tears',
                      language: 'TypeScript',
                      forksCount: 1619,
                      stargazersCount: 21856,
                      ratingAverage: 88,
                      reviewCount: 3,
                      ownerAvatarUrl:
                        'https://avatars2.githubusercontent.com/u/4060187?v=4',
                    },
                    cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                  },
                  {
                    node: {
                      id: 'async-library.react-async',
                      fullName: 'async-library/react-async',
                      description: 'Flexible promise-based React data loader',
                      language: 'JavaScript',
                      forksCount: 69,
                      stargazersCount: 1760,
                      ratingAverage: 72,
                      reviewCount: 3,
                      ownerAvatarUrl:
                        'https://avatars1.githubusercontent.com/u/54310907?v=4',
                    },
                    cursor:
                      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                  },
                ],
              };

              const {  debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
              const [firstRepositoryItem, secondRepositoryItem] = getAllByTestId('repositoryItem');

              debug('RepositoryListContainer element');

              // Testing first repository element
              expect(within(firstRepositoryItem).getByTestId('image')).toHaveProp('source', { 'uri': 'https://avatars2.githubusercontent.com/u/4060187?v=4' });
              expect(within(firstRepositoryItem).getByTestId('fullName')).toHaveTextContent('jaredpalmer/formik');
              expect(within(firstRepositoryItem).getByTestId('description')).toHaveTextContent('Build forms in React, without the tears');
              expect(within(firstRepositoryItem).getByTestId('language')).toHaveTextContent('TypeScript');
              expect(within(firstRepositoryItem).getByTestId('forks')).toHaveTextContent('1.6 k');
              expect(within(firstRepositoryItem).getByTestId('starts')).toHaveTextContent('21.9 k');
              expect(within(firstRepositoryItem).getByTestId('rating')).toHaveTextContent('88');
              expect(within(firstRepositoryItem).getByTestId('reviews')).toHaveTextContent('3');
              
              // Testing second repository element
              expect(within(secondRepositoryItem).getByTestId('image')).toHaveProp('source', { 'uri': 'https://avatars1.githubusercontent.com/u/54310907?v=4' });
              expect(within(secondRepositoryItem).getByTestId('fullName')).toHaveTextContent('async-library/react-async');
              expect(within(secondRepositoryItem).getByTestId('description')).toHaveTextContent('Flexible promise-based React data loader');
              expect(within(secondRepositoryItem).getByTestId('language')).toHaveTextContent('JavaScript');
              expect(within(secondRepositoryItem).getByTestId('forks')).toHaveTextContent('69');
              expect(within(secondRepositoryItem).getByTestId('starts')).toHaveTextContent('1.8 k');
              expect(within(secondRepositoryItem).getByTestId('rating')).toHaveTextContent('72');
              expect(within(secondRepositoryItem).getByTestId('reviews')).toHaveTextContent('3');
        });
    });
});