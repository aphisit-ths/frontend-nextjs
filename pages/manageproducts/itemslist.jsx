import React, { useState } from "react";
import Image from 'next/image'
function ItemList({ prod, index }) {
 
  const [updating, setUpdate_product] = useState(true);
  const onclick_update = () => {
    setUpdate_product(!updating);
  };
  return (
    <>
      <tr key={index} className="text-gray-700">
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
                    {prod.desc}
                  </p>
                </>
              ) : (
                <>
                <input placeholder={prod.desc} class="input border border-gray-400 appearance-none rounded w-full px-3  h-8 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 uppercase"  autofocus />
                </>
              )}

              <p className="text-xs text-gray-600">{prod.createdAt}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-ms font-semibold border">
        {!updating ? (
                <>
                  <p className="font-semibold text-black text-2xl uppercase">
                    {prod.price}
                  </p>
                </>
              ) : (
                <>
                <input placeholder={prod.price} class="input border border-gray-400 m-1 px-1 pl-3  appearance-none rounded w-12  h-8  focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600 uppercase"  autofocus />
                </>
              )}
          </td>
        <td className="px-4 py-3 text-xs border">
          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
            {" "}
            Acceptable{" "}
          </span>
        </td>

        <td className="px-4 py-3 text-xs border place-items-center  ">
        {!updating ? (
                <>
                  <span
            onClick={onclick_update}
            className=" px-4 py-1 font-semibold leading-tight hover:bg-blue-400 hover:shadow-lg  text-black-700 bg-gray-400 rounded-sm cursor-pointer  "
          >
            {" "}
            Edit{" "}
          </span>
                </>
              ) : (
                <>
                <span
            onClick={onclick_update}
            className=" px-4 py-1 font-semibold leading-tight hover:bg-blue-400 hover:shadow-lg mr-1  text-black-700 bg-green-100 rounded-sm cursor-pointer  "
          >
            {" "}
            Confirm{" "}
          </span>
                <span
            onClick={onclick_update}
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
