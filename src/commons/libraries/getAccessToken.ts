import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient("https://carpick.shop/graphql", {
      credentials: "include",
    });
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    console.log("this is resotre", result);
    const newAccessToken = result.restoreAccessToken;

    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
}
