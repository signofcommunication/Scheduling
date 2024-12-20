import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const getAllRuangan = async () => {
  const response = await axios.get(`${API_URL}/ruang`);
  return response.data;
};

export const getRuanganById = async id => {
  const response = await axios.get(`${API_URL}/ruang/${id}`);
  return response.data;
};

export const deleteRuangan = async id => {
  await axios.delete(`${API_URL}/ruang/${id}`);
};

export const updateRuangan = async (id, updateRuangan) => {
  await axios.patch(`${API_URL}/ruang/${id}`, updateRuangan);
};
