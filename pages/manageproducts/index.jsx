import React, { useContext, useState } from "react";
import { AuthContext } from "../../appstate/AuthProvider";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import Loader from "../../components/loader/Loader";
import ItmesList from './itemslist'
const ME = gql`
  query ME {
    user {
      id
      name
      email
      products {
        id
        desc
        imgUrl
        price
        createdAt
      }
    }
  }
`;
function UserProducts() {
  const [update_product, setUpdate_product] = useState(true);
  const onclick_update = () => {
    setUpdate_product(!update_product)
      console.log(update_product)
    ;
  };
  const { data, loading, error } = useQuery(ME);
  if (error) console.log(error);
  if (loading) return <Loader />;
  const { id, name, products } = data.user;
  return (
    <section className="flex flex-col container mx-auto p-6 font-mono mt-10">
      <div className="self-end m-6">
        <p className="uppercase border-gray-700 hover:text-yellow-300 cursor-pointer">
          Add more +
        </p>
      </div>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-2 py-3 ">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((prod, index) => (
                <ItmesList prod={prod} index={index}></ItmesList>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default UserProducts;
