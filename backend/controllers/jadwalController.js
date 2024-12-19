import * as jadwalModel from "../models/jadwal/jadwal.js";

export const getAllJadwal = async (req, res) => {
  try {
    const jadwal = await jadwalModel.getAllJadwal();
    res.status(200).json(jadwal);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving jadwal", error });
  }
};

export const getJadwalById = async (req, res) => {
  try {
    const { id } = req.params;
    const jadwal = await jadwalModel.getJadwalById(id);
    if (!jadwal) {
      return res.status(404).json({ message: "Jadwal not found" });
    }
    res.status(200).json(jadwal);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving jadwal", error });
  }
};

export const createJadwal = async (req, res) => {
  try {
    const newJadwal = req.body;
    const id = await jadwalModel.createJadwal(newJadwal);
    res.status(201).json({ message: "Jadwal created", id });
  } catch (error) {
    res.status(500).json({ message: "Error creating jadwal", error });
  }
};

export const updateJadwal = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJadwal = req.body;
    const affectedRows = await jadwalModel.updateJadwal(id, updatedJadwal);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Jadwal not found" });
    }
    res.status(200).json({ message: "Jadwal updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating jadwal", error });
  }
};

export const deleteJadwal = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await jadwalModel.deleteJadwal(id);
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Jadwal not found" });
    }
    res.status(200).json({ message: "Jadwal deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting jadwal", error });
  }
};
