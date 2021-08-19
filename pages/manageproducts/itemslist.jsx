import React, { useState } from "react";
import Image from "next/image";

import { useMutation } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import gql from "graphql-tag";
const UPDATE_PRODUCT = gql`
  mutation($id: ID!,$desc:String , $price:Float $imgUrl:String){
  updateProduct(id: $id, desc: $desc , price: $price ,imgUrl: $imgUrl) {
    id
    desc
    price
  }
}
`


function ItemList({ prod }) {
  const [productData, setProductData] = useState(prod);
  const [updating, setUpdate_product] = useState(false);

  const [updateProduct,{loading,error}] = useMutation(UPDATE_PRODUCT,{
    onCompleted: data =>{
      setProductData(data.updateProduct)
    }
  })

  const onclick_update = () => {
    setUpdate_product(!updating);
  };

  const handleChange = (e) =>
    setProductData({ ...productData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if(productData === prod){
      setProductData(prod)
      return
    }
    try {
      updateProduct({variables:{
        ...productData,
        price:+productData.price
      }})
      setUpdate_product(false)
    } catch (error) {
      console.log(error)
    }
  }
  const handleCancle = async () => {
    setProductData(prod)
    setUpdate_product(false)
  }

  const [amoutState,setAmoutState] = useState(0)
  const addAmount = () => {
    setAmoutState(amoutState +1)
  }
  const delAmount = () => {
    amoutState == 0 ? null : setAmoutState(amoutState -1)
  }
  
  
  return (
    <>
      <tr key={prod.id} className="text-gray-700">
        <td className="px-4 py-3 border">
          <div className="flex items-center text-sm">
            <div className="relative w-10 h-10 mr-3 rounded-full md:block">
              <Image
                className="object-cover w-full h-full rounded-full"
                src={prod.imgUrl}
                alt=""
                width={1300}
                height={1300}
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              {!updating ? (
                <>
                  <p className="font-semibold text-black text-2xl uppercase">
                    {productData.desc}
                  </p>
                </>
              ) : (
                <>
                  <input
                    onChange={handleChange}
                    name="desc"
                    placeholder={productData.desc}
                    className="input border  border-gray-400 appearance-none rounded w-full px-3  h-8 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 uppercase"
                  />
                </>
              )}

              <p className="text-xs text-gray-600">{productData.createdAt}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-ms font-semibold border">
          {!updating ? (
            <>
              <p className="font-semibold text-black text-2xl uppercase">
                {productData.price}
              </p>
            </>
          ) : (
            <>
              <input
                onChange={handleChange}
                name="price"
                placeholder={productData.price}
                className="input border border-gray-400 m-1 px-1 pl-3  appearance-none rounded w-12  h-8  focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 uppercase"

              />
            </>
          )}
        </td>
        <td className="px-4 py-3 text-xs border">
          
          <span className="p-2 mr-2 font-semibold leading-tight text-lg rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200" onClick={delAmount}>
            -
          </span>
          {/* <input 
          className="input border text-sm border-gray-400 m-1 px-1 pl-3 mr-2  appearance-none rounded w-12  h-9 hover:bg-gray-200  uppercase " type="text"
          value={amoutState}
          /> */}
          <span className="p-1 mr-2 text-xl border-2" >{amoutState}</span>
          <span className="p-2 mr-2 font-semibold leading-tight text-lg rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200" onClick={addAmount}>
            +
          </span>
        </td>
        <td className="px-4 py-3 text-xs border place-items-center  ">
          {!updating ? (
            <>
              <span
                onClick={onclick_update}
                className="  px-4 py-1 font-semibold leading-tight hover:bg-blue-400 hover:shadow-lg  text-black-700 bg-gray-200 rounded-sm cursor-pointer  "
              >
                {" "}
                Edit{" "}
              </span>
            </>
          ) : (
            <>
              <span
                onClick={handleSubmit}
                className=" px-4 py-1 font-semibold leading-tight hover:bg-blue-400 hover:shadow-lg mr-1  text-black-700 bg-green-100 rounded-sm cursor-pointer  "
              >
                {" "}
                Confirm{" "}
              </span>
              <span
                onClick={handleCancle}
                className=" px-4 py-1 font-semibold leading-tight   text-black-700  rounded-sm cursor-pointer  "
              >
                {" "}
                Cancle{" "}
              </span>
            </>
          )}
        </td>
      </tr>
    </>
  );
}

export default ItemList;
