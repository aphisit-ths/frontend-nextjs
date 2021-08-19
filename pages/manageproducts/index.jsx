import React, { useContext, useState } from "react";
import { AuthContext } from "../../appstate/AuthProvider";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import Loader from "../../components/loader/Loader";
import ItmesList from "./itemslist";
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
  const [toggleAddBtn, setToggleAddBtn] = useState(false);
  const toggle_AddBtn = () => {
    setToggleAddBtn(!toggleAddBtn);
  };

  const { data, loading, error } = useQuery(ME);
  if (error) console.log(error);
  if (loading) return <Loader />;
  const { id, name, products } = data.user;
  console.log();
  return (
    <section className="flex flex-col container mx-auto p-6 font-mono mt-10">
      <div className="self-end m-6">
        <p
          onClick={toggle_AddBtn}
          className="uppercase border-gray-700  text-yellow-300 hover:text-yellow-300 cursor-pointer animate-pulse"
        >
          Add more +
        </p>
      </div>

      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full px-4 py-3 border keyfr ">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">price</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-2 py-3 ">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white transition ">
              {!toggleAddBtn ? null : (
                <>
                  <td className="px-4 py-8 border"> </td>
                  <td className="px-4 py-8 border"> </td>
                  <td className="px-4 py-8 border"> </td>
                  <td className="px-4 py-8 border"> </td>
                </>
              )}

              {products.map((prod) => (
                <ItmesList prod={prod} key={prod.id}></ItmesList>
              ))}
            </tbody>
            {products.length == 0 && (
              <span className="m10 ">dont have any product.</span>
            )}
          </table>
        </div>
      </div>
    </section>
  );
}

export default UserProducts;
