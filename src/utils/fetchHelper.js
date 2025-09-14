import axios from "axios";

export const fetchJson = async (url) => {
  const response = await axios.get(url);
  return response.data;
};
