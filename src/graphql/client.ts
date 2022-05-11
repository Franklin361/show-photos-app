import { ApolloClient, InMemoryCache, from, createHttpLink, split } from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import { getTokenStorage, showToast } from '../utils';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const uri_http = import.meta.env.VITE_HOST_SERVICE_HTTP as string
const uri_ws = import.meta.env.VITE_HOST_SERVICE_WS as string

const errorLink = onError(({ graphQLErrors, networkError }) => {
  
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      showToast({msg:message})
    });
  }
  if(networkError){
    showToast({msg:networkError.message})
  }
});

const wsLink = new GraphQLWsLink(createClient({
  url: uri_ws
}));

const httpLink = createHttpLink({
  uri: uri_http
});


const authLink = setContext((_, { headers }) => {
  const token = getTokenStorage();
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});


const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);


export const client = new ApolloClient({
  link: from([errorLink, splitLink]),
  cache: new InMemoryCache({
    typePolicies:{
      Query: {
        fields: {
          getFavoritesByUser: {
            merge(existing, incoming) {
              return incoming;
            }
          }
        }
      }
    }
  })
});