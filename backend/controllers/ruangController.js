import * as ruangModel from "../models/ruang/ruang.js";

export const getAllRuang = async (req, res) => {
  try {
    const ruang = await ruangModel.getAllRuang();
    res.status(200).json(ruang);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving ruang", error });
  }
};

export const getRuangById = async (req, res) => {
  try {
    const { id } = req.params;
    const ruang = await ruangModel.getRuangById(id);
    if (!ruang) {
      return res.status(404).json({ message: "Ruang not found" });
    }
    res.status(200).json(ruang);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving ruang", error });
  }
};

export const createRuang = async (req, res) => {
  try {
    const newRuang = req.body;
    const id = await ruangModel.createRuang(newRuang);
    res.status(201).json({ message: "Ruang created", id });
  } catch (error) {
    res.status(500).json({ message: "Error creating ruang", error });
  }
};

export const updateRuang = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRuang = req.body;
    const affectedRows = await ruangModel.updateRuang(id, updatedRuang);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Ruang not found" });
    }
    res.status(200).json({ message: "Ruang updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating ruang", error });
  }
};

export const deleteRuang = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await ruangModel.deleteRuang(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Ruang not found" });
    }
    res.status(200).json({ message: "Ruang deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting ruang", error });
  }
};
