import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl61rml7o4ysl01uk8vnu8nnx/master',
    cache: new InMemoryCache()
})