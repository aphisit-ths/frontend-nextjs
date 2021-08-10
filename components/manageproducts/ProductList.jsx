import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function ProductList({ prod }) {
  const [edit, setEdit] = useState(false);
  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3 border">
        <div className="flex items-center text-sm">
          <div className="relative w-10 h-10 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src={prod.imgUrl}
              alt=""
              loading={prod.desc}
            />
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p className="font-semibold text-black text-2xl uppercase">
              {edit ? (
                <input
                  type="text"
                  className="border bg-gray-100 pl-3  outline-none focus:ring-2 focus:ring-indigo-400 rounded uppercase"
                  placeholder={prod.desc}
                />
              ) : (
                prod.desc
              )}
            </p>
            <p className="text-xs text-gray-600">{prod.createdAt}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-ms font-semibold border">
        {edit ? (
          <input
            type="text"
            className="border bg-gray-100 pl-3  outline-none focus:ring-2 focus:ring-indigo-400 rounded uppercase"
            placeholder={prod.price}
          />
        ) : (
          prod.price
        )}
      </td>
      <td className="px-4 py-3 text-xs border">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {" "}
          Active{" "}
        </span>
      </td>

      <td className=" px-4 py-3 text-xs border place-items-center font-medium  ">
      {edit ? (
          <span
            onClick={() => {
              setEdit(!edit);
            }}
            className=" px-4 py-1 mr-3  font-semibold leading-tight hover:bg-green-400 hover:text-green-100 hover:shadow-lg  text-green-700   bg-green-200 rounded-sm cursor-pointer  "
          >
            Update
          </span>
        ) : (
          ""
        )}
        <span
          onClick={() => {
            setEdit(!edit);
          }}
          className=" px-4 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-gray-100 text-green-800 cursor-pointer  "
        >
          {edit ? "Cancle" : "Edit"}
        </span>
        
      </td>
    </tr>
  );
}
export default ProductList;
