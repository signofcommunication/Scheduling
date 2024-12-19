import * as kelasModel from "../models/kelas/kelas.js";

export const getAllKelas = async (req, res) => {
  try {
    const kelas = await kelasModel.getAllKelas();
    res.status(200).json(kelas);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving kelas", error });
  }
};

export const getKelasById = async (req, res) => {
  try {
    const { id } = req.params;
    const kelas = await kelasModel.getKelasById(id);
    if (!kelas) {
      return res.status(404).json({ message: "Kelas not found" });
    }
    res.status(200).json(kelas);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving kelas", error });
  }
};

export const createKelas = async (req, res) => {
  try {
    const newKelas = req.body;
    const id = await kelasModel.createKelas(newKelas);
    res.status(201).json({ message: "Kelas created", id });
  } catch (error) {
    res.status(500).json({ message: "Error creating kelas", error });
  }
};

export const updateKelas = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedKelas = req.body;
    const affectedRows = await kelasModel.updateKelas(id, updatedKelas);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Kelas not found" });
    }
    res.status(200).json({ message: "Kelas updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating kelas", error });
  }
};

export const deleteKelas = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await kelasModel.deleteKelas(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Kelas not found" });
    }
    res.status(200).json({ message: "Kelas deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting kelas", error });
  }
};
