import axios from "axios";

export const getProduct = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data.products;
};
