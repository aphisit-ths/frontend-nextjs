import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Loader from "../../components/loader/Loader";
import "tailwindcss/tailwind.css";
const QUERY_PRODUCT = gql`
  query QUERY_PRODUCT($id: ID!) {
    product(id: $id) {
      desc
      imgUrl
      price
    }
  }
`;
function EditProduct() {
  const route = useRouter();
  const Editting_Prod_id = route.query.EditProduct;
  const product = useQuery(QUERY_PRODUCT, {
    variables: { id: Editting_Prod_id },
  });
  const { data, loading, error } = product;
  if (error) return <h1>Something went wrong....</h1>;
  if (loading) return <Loader></Loader>;

  return (
    
      <div className=" flex flex-row item  justify-center h-screen p-10  ">
          <div className="flex flex-col w-2/5 h-3/5 bg-gray-200 shadow-md rounded-2xl ">
            <div className="w-2/6 h-2/6 rounded-full bg-gray-600"></div>
          </div>
      </div>
    
  );
}
export default EditProduct;
