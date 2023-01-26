import axios from "axios";
import { useState } from "react";
import { PRODUCTS_URL, PRODUCT_BY_ID_URL, SELLER_PROFİLE } from "../constant/urls";
import { ProductType } from "../types";

const useFetchData = () => {
  const [products, setProducts] = useState<ProductType[] | []>([]);
  const [productId, setProductId] = useState<ProductType>();
  const [loading, setLoading] = useState(false);
  const [sellerProfile, setSellerProfile] = useState();
  
  const [errors, setErrors] = useState();

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(PRODUCTS_URL);
      setProducts(data);
    } catch (error) {}
    setLoading(false);
  };

  const fetchDataById = async (id: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${PRODUCT_BY_ID_URL}/${id}`);
      setProductId(data);
    } catch (error) {}
    setLoading(false);
  };


  const getSellerById = async (id: string) => { 
    setLoading(true)
    try {
      const { data } = await axios.get(`SELLER_PROFİLE/${id}`)
      setSellerProfile(data)
    } catch (error) {
      
    }
    setLoading(false)
  }

  return { products, productId, loading, fetchAllData, fetchDataById,sellerProfile,getSellerById };
};

export default useFetchData;
