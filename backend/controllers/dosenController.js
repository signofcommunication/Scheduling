import * as dosenModel from "../models/dosen/dosen.js";

export const getAllDosen = async (req, res) => {
  try {
    const dosen = await dosenModel.getAllDosen();
    res.status(200).json(dosen);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving dosen", error });
  }
};

export const getDosenById = async (req, res) => {
  try {
    const { id } = req.params;
    const dosen = await dosenModel.getDosenById(id);
    if (!dosen) {
      return res.status(404).json({ message: "Dosen not found" });
    }
    res.status(200).json(dosen);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving dosen", error });
  }
};

export const createDosen = async (req, res) => {
  try {
    const newDosen = req.body;
    const id = await dosenModel.createDosen(newDosen);
    res.status(201).json({ message: "Dosen created", id });
  } catch (error) {
    res.status(500).json({ message: "Error creating dosen", error });
  }
};

export const updateDosen = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDosen = req.body;
    const affectedRows = await dosenModel.updateDosen(id, updatedDosen);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Dosen not found" });
    }
    res.status(200).json({ message: "Dosen updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating dosen", error });
  }
};

export const deleteDosen = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await dosenModel.deleteDosen(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Dosen not found" });
    }
    res.status(200).json({ message: "Dosen deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting dosen", error });
  }
};
