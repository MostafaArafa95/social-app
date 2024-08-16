//TODO: delete axios
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://gorest.co.in/public/v2/graphql',
    cache: new InMemoryCache()
});

export default client