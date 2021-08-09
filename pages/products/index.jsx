import React from "react";
import Link from "next/link";
import prodStyle from "../../styles/prod.module.scss";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { ThreeHorseLoading } from 'react-loadingg'



const QUERY_PRODUCTS = gql`
  query {
    products {
      id
      desc
      imgUrl
      price
    }
  }
`;

const Products = () => {
  const products_list = useQuery(QUERY_PRODUCTS);
  const {data,loading,error} = products_list 
  if (error) return <h1>Something Worngs ....</h1>
  if (loading) return  <ThreeHorseLoading/>
  return (
    <div className={prodStyle.rootcontainer}>
      {data.products.map((data) => (
        <Link
          key={data.id}
          href="/products/[productId]"
          as={`/products/${data.id}`}
        >
          <div className={prodStyle.product}>
            <a>
              <h2>{data.desc}</h2>
            </a>
            <img className={prodStyle.img} src={data.imgUrl} alt={data.desc} />
            <h1>{data.price} B.</h1>
            <button>Add</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
