import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import apolloClient from "../../apollo/apolloClient";
import { ThreeHorseLoading } from "react-loadingg";
import infoStyle from "../../styles/prodinfo.module.scss";
import Link from 'next/link'
const QUERY_PRODUCT = gql`
  query QUERY_PRODUCT($id: ID!) {
    product(id: $id) {
      desc
      imgUrl
      price
    }
  }
`;
  
const Product = () => {
  const route = useRouter();
  const product = useQuery(QUERY_PRODUCT, {
    variables: { id: route.query.productId },
  });
  
  const { data, loading, error } = product;
  if (error) return <h1>Something Wrong......</h1>;
  if (loading) return <ThreeHorseLoading></ThreeHorseLoading>;
  return (
    <div className={infoStyle.container}>
      <div className={infoStyle.header}>
        <h1>PRODUCT INFO</h1>
      </div>
      <div className={infoStyle.warpper}>
        <div className={infoStyle.warpimg}>
          <img src={data.product.imgUrl} alt={data.product.desc} />
        </div>
        <div className={infoStyle.warpinfo}>
          <h2>{data.product.desc}</h2>
          <h1> B {data.product.price}. </h1>
            <Link href="/products">
            <a > &#060; Back to product list </a>
            </Link>
          
        </div>
      </div>
    </div>
  );
};
export default apolloClient(Product);
