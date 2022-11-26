import { useState } from "react";

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const APIURL_OPENSEA = "https://api.thegraph.com/subgraphs/name/henrique1837/coldstakingsrgmumbai"

function useGraphClient() {
  const [client, setClient] = useState();

  const initiateClient = (netId) => {
    //if(!client && netId){
    let newClient = new ApolloClient({
      uri: APIURL_OPENSEA,
      cache: new InMemoryCache()
    });

    setClient(newClient);
  }
  const getStablecoins = async () => {
    let tokensQuery = `
    query{
      stablecoins(where: {accepted: true}){
        id
        accepted
      }
    }
   `;
    const results = await client.query({
      query: gql(tokensQuery)
    });
    return (results);
  }

  return ({ client, initiateClient, getStablecoins })
}

export default useGraphClient;
