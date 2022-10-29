import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.LENS_API_URL || "https://api.lens.dev",
});
