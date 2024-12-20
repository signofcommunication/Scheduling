import axios from "axios";

const API_URL = "http://localhost:4000/api"; // Replace with your API URL

export const createDosen = async dosen => {
  await axios.post(`${API_URL}/dosen`, dosen);
};

export const getAllDosen = async () => {
  const response = await axios.get(`${API_URL}/dosen`);
  return response.data;
};

export const getDosenById = async id => {
  const response = await axios.get(`${API_URL}/dosen/${id}`);
  return response.data;
};

export const deleteDosen = async id => {
  await axios.delete(`${API_URL}/dosen/${id}`);
};

export const updateDosen = async (id, updatedDosen) => {
  await axios.patch(`${API_URL}/dosen/${id}`, updatedDosen);
};
