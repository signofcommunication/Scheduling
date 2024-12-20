import axios from "axios";

const API_URL = "http://localhost:4000/api"; // Replace with your API URL

export const getAllJadwal = async () => {
  const response = await axios.get(`${API_URL}/jadwal`);
  return response.data;
};

export const getJadwalById = async id => {
  const response = await axios.get(`${API_URL}/jadwal/${id}`);
  return response.data;
};

export const deleteJadwal = async id => {
  await axios.delete(`${API_URL}/jadwal/${id}`);
};

export const updateJadwal = async (id, updateJadwal) => {
  await axios.patch(`${API_URL}/jadwal/${id}`, updateJadwal);
};

export const createJadwal = async jadwal => {
  await axios.post(`${API_URL}/jadwal`, jadwal);
};
