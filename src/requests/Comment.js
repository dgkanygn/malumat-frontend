import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

// yeni yorum oluşturma
export const createCommentReq = (body) => {
  return axios.post(`${BASE_URL}/createComment`, body);
};

// yorumların getirilmesi
export const getCommentsReq = (data) => {
  return axios.get(`${BASE_URL}/getCommentByPostId/${data}`);
};
