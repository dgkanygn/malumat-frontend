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

// yorum beğenme
export const likeCommentReq = (body) => {
  return axios.put(`${BASE_URL}/addLikesComment`, body);
};

// yorum güncelleme
export const updateCommentReq = (id, body) => {
  return axios.put(`${BASE_URL}/updateComment/${id}`, body);
};

// yorum silme
export const deleteCommentReq = (id) => {
  return axios.delete(`${BASE_URL}/deleteComment/${id}`);
};
