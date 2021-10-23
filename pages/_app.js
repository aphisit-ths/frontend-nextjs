import "../styles/globals.css";
import AuthProvider from "../appstate/AuthProvider";
import Pagelayout from "../components/Layout/Pagelayout";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "../apollo/apolloClient";
import fetch from "isomorphic-unfetch";
import cookie from "cookie";
import 'tailwindcss/tailwind.css'

// function MyApp({ Component, pageProps ,apollo }) {
//   return (
//     <ApolloProvider client={apollo}>
//       <Pagelayout>
//         <Component {...pageProps} />
//       </Pagelayout>
//     </ApolloProvider>
//   );
// }
function MyApp({ Component, pageProps, apollo ,user }) {
 
  return (
    <ApolloProvider client={apollo}>
      <AuthProvider userData={user}>
        <Pagelayout>
          <Component {...pageProps} />
        </Pagelayout>
      </AuthProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async ({ ctx ,router }) => {
  //Client Side
  
  if (process.browser) {
    return __NEXT_DATA__.props.pageProps;
  }
  const { headers } = ctx.req;
  const cookies = headers && cookie.parse(headers.cookie || "");
  const token = cookies && cookies.jwt;
  if(!token){
    if(router.pathname === '/userprofile' || router.pathname === '/555'){
      ctx.res.writeHead(302,{location:"/signin"})
      ctx.res.end()
    }
    return null
  }else{
    if(router.pathname === '/signin'){
      ctx.res.writeHead(302,{location:"/"})
      ctx.res.end()
    }
  }
  //สร้างไว้ก่อนเพื่อรอ Client Side
  const QUERY_USER = {
    query: `
      query{
        user {
          id
          name
          email
          products {
            id
          }
          carts {
            id
            product {
              desc
              imgUrl
              price
            }
            quantity
          }
        }
      }
    `,
  };
  const response = await fetch("http://localhost:4444/graphql", { 
    //Gql Post เสมอ
    method: "post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token} || ''`,
    },
    body: JSON.stringify(QUERY_USER),
  });

  if (response.ok) {
    const result = await response.json();
    return { user: result.data.user};
  } else {
    if(router.pathname === '/cart' || router.pathname === '/manageproducts'){
      ctx.res.writeHead(302,{location:"/signin"})
      ctx.res.end()
    }
    return null;
  }
};

export default apolloClient(MyApp);
