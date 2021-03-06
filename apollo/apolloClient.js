import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";
import cookie from "cookie"
const uri = "https://backend-gql-kmitlreviewer.herokuapp.com/graphql";

const httpLink = createHttpLink({ uri, fetch });
//Create Headers
const authLink = setContext((_, { headers }) => {
  //Get token from Cookies ----> push to headers
  //Sever side
  let cookies
  if(headers){
    cookies = cookie.parse(headers.cookie || "")
  }

  //Client Side 
  if(typeof window !== "undefined"){
    cookies = cookie.parse(document.cookie || "")
  }
  const token = cookies && cookies.jwt || ""
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  // {
  //   render: ({ Page, props }) => {
  //     return (
  //       <ApolloProvider client={props.apollo}>
  //         <Page {...props} />
  //       </ApolloProvider>
  //     );
  //   },
  // }
);
