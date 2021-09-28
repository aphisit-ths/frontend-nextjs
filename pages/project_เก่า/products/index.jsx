import React from "react";
import Link from "next/link";
import prodStyle from "../../styles/prod.module.scss";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { ThreeHorseLoading } from "react-loadingg";
import Image from "next/image";
import Loader from '../../components/loader/Loader'

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
  const { data, loading, error } = products_list;
  if (error) return <h1>Something Worngs ....</h1>;
  if (loading) return <loader></loader>
  return (
    <div className={prodStyle.rootcontainer}>
      {data.products.map((data) => (
        <div className={prodStyle.product} key={data.id}>
          <div className="img">
            <Image
              className={prodStyle.img}
              src={data.imgUrl}
              alt={data.desc}
              width={1200}
              height={1800}
            />
          </div>

          <h1>{data.price} Bath</h1>

          <a>
            <h2>{data.desc}</h2>
          </a>
          <Link
            key={data.id}
            href="/products/[productId]"
            as={`/products/${data.id}`}
            passHref
          >
            <span>more info .</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
