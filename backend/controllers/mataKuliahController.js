import * as mataKuliahModel from "../models/mata_kuliah/matkul.js";

export const getAllMataKuliah = async (req, res) => {
  try {
    const mataKuliah = await mataKuliahModel.getAllMataKuliah();
    res.status(200).json(mataKuliah);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving mata kuliah", error });
  }
};

export const getMataKuliahById = async (req, res) => {
  try {
    const { id } = req.params;
    const mataKuliah = await mataKuliahModel.getMataKuliahById(id);
    if (!mataKuliah) {
      return res.status(404).json({ message: "Mata kuliah not found" });
    }
    res.status(200).json(mataKuliah);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving mata kuliah", error });
  }
};

export const createMataKuliah = async (req, res) => {
  try {
    const newMataKuliah = req.body;
    const id = await mataKuliahModel.createMataKuliah(newMataKuliah);
    res.status(201).json({ message: "Mata kuliah created", id });
  } catch (error) {
    res.status(500).json({ message: "Error creating mata kuliah", error });
  }
};

export const updateMataKuliah = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMataKuliah = req.body;
    const affectedRows = await mataKuliahModel.updateMataKuliah(
      id,
      updatedMataKuliah
    );
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Mata kuliah not found" });
    }
    res.status(200).json({ message: "Mata kuliah updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating mata kuliah", error });
  }
};

export const deleteMataKuliah = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await mataKuliahModel.deleteMataKuliah(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Mata kuliah not found" });
    }
    res.status(200).json({ message: "Mata kuliah deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting mata kuliah", error });
  }
};
