import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const getAllKelas = async () => {
  const response = await axios.get(`${API_URL}/kelas`);
  return response.data;
};

export const getKelasById = async id => {
  const response = await axios.get(`${API_URL}/kelas/${id}`);
  return response.data;
};

export const deleteKelas = async id => {
  await axios.delete(`${API_URL}/kelas/${id}`);
};

export const updateKelas = async (id, updateKelas) => {
  await axios.patch(`${API_URL}/kelas/${id}`, updateKelas);
};
