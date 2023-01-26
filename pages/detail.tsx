import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useFetchData from "../hooks/useFetchData";

type Props = {};

const detail = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { productId, fetchDataById } = useFetchData();

  useEffect(() => {
    if (typeof id === "string") {
      fetchDataById(id);
    }
  }, []);

  console.log(productId);

  return (
    <div className="flex justify-center items-center">
    <div className="bg-gray-500 p-10 rounded-lg shadow-md">
      <h1 className="text-xl font-bold">{productId?.brand}</h1>
      <div className="mt-4 mb-10">
        <p className="text-gray-600">{productId?.amount}</p>
        <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
          <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md" />
        </div>
      </div>
      <h3 className="text-xs uppercase">{productId?.name}</h3>

      {/* <button
        className="bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
        onClick={handleClick}>
        Go to Detail
      </button> */}
    </div>
  </div>
  );
};

export default detail;
