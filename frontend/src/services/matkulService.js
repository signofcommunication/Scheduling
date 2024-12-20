import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const getAllMatkul = async () => {
  const response = await axios.get(`${API_URL}/mata-kuliah`);
  return response.data;
};

export const getMataKuliahById = async id => {
  const response = await axios.get(`${API_URL}/mata-kuliah/${id}`);
  return response.data;
};

export const deleteMataKuliah = async id => {
  await axios.delete(`${API_URL}/mata-kuliah/${id}`);
};

export const updateMataKuliah = async (id, updateRuangan) => {
  await axios.patch(`${API_URL}/mata-kuliah/${id}`, updateRuangan);
};
