import axios from "axios";
const API_KEY = "57670282-f23c2b26a4d723b7515ee2ad5";
const BASE_URL = "https://pixabay.com/api/";
export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response.data;
}