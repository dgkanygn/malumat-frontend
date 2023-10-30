import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// ana sayfadaki postların getirilmesi
export const getPostsReq = () => {
  return axios.get(`${BASE_URL}/posts`);
};

// ana sayfadaki trendlerin getirilmesi
export const getTrendsReq = () => {
  return axios.get(`${BASE_URL}/trends`);
};

// yeni post oluşturma
export const createPostReq = (body) => {
  return axios.post(`${BASE_URL}/createPost`, body);
};

// spesifik bir postu getirme
export const getPostReq = (data) => {
  return axios.get(`${BASE_URL}/post/${data}`);
};

// postu favorilere ekleme
export const addFavoritesPostReq = (body) => {
  return axios.put(`${BASE_URL}/addFavoritesPost`, body);
};

// id ile postun favori sayısını getirme
export const getFavLengthByIdReq = (data) => {
  return axios.get(`${BASE_URL}/getFavLengthById/${data}`);
};

// post düzenleme
export const updatePostReq = (id, body) => {
  return axios.patch(`${BASE_URL}/updatePost/${id}`, body);
};

// post düzenleme
export const filterData = (id, body) => {
  return axios.patch(`${BASE_URL}/updatePost/${id}`, body);
};
