import axios from "axios";

const ApiUrl = "https://dummyjson.com/products";

const getAllProducts = () => {
  return axios.get(ApiUrl);
};

// for showing LIST of Categories
const getCategories = () => {
  return axios.get(`${ApiUrl}/categories`);
};

const getProductsByCategory = (cat) => {
  return axios.get(`${ApiUrl}/category/${cat}`);
};

const getProductById = (id) => {
  return axios.get(`${ApiUrl}/${id}`);
};

const getProductBySearch = (searchQuery) => {
  return axios.get(`${ApiUrl}/search?q=${searchQuery}`);
};

export {
  getAllProducts,
  getCategories,
  getProductById,
  getProductsByCategory,
  getProductBySearch,
};
