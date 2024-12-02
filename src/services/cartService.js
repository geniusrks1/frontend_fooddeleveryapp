import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL + "/api/v1";

export const generateShareableLink = async () => {
  const response = await axios.post(`${API_BASE_URL}/cart/share`);
  return response.data;
};

export const fetchSharedCart = async (token) => {
  const response = await axios.get(`${API_BASE_URL}/shared-cart/${token}`);
  return response.data;
};

export const checkoutSharedCart = async (token) => {
  const response = await axios.post(`${API_BASE_URL}/shared-cart/${token}/checkout`);
  return response.data;
};
