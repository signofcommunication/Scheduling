import db from "../../database/db.js";

const getAllMataKuliah = async () => {
  const [rows] = await db.query("SELECT * FROM MATA_KULIAH");
  return rows;
};

// Get mata kuliah by kode_mk
const getMataKuliahById = async kode_mk => {
  const [rows] = await db.query("SELECT * FROM MATA_KULIAH WHERE kode_mk = ?", [
    kode_mk,
  ]);
  return rows[0];
};

// Create new mata kuliah
const createMataKuliah = async mataKuliah => {
  const { kode_mk, nama_mk, sks } = mataKuliah;
  const [result] = await db.query(
    "INSERT INTO MATA_KULIAH (kode_mk, nama_mk, sks) VALUES (?, ?, ?)",
    [kode_mk, nama_mk, sks]
  );
  return result.insertId;
};

// Update mata kuliah
const updateMataKuliah = async (kode_mk, mataKuliah) => {
  const { nama_mk, sks } = mataKuliah;
  const [result] = await db.query(
    "UPDATE MATA_KULIAH SET nama_mk = ?, sks = ? WHERE kode_mk = ?",
    [nama_mk, sks, kode_mk]
  );
  return result.affectedRows;
};

// Delete mata kuliah
const deleteMataKuliah = async kode_mk => {
  const [result] = await db.query("DELETE FROM MATA_KULIAH WHERE kode_mk = ?", [
    kode_mk,
  ]);
  return result.affectedRows;
};

export {
  getAllMataKuliah,
  getMataKuliahById,
  createMataKuliah,
  updateMataKuliah,
  deleteMataKuliah,
};
