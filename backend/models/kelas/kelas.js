import db from "../../database/db.js";

const getAllKelas = async () => {
  const [rows] = await db.query("SELECT * FROM KELAS");
  return rows;
};

// Get kelas by kode_kelas
const getKelasById = async kode_kelas => {
  const [rows] = await db.query("SELECT * FROM KELAS WHERE kode_kelas = ?", [
    kode_kelas,
  ]);
  return rows[0];
};

// Create new kelas
const createKelas = async kelas => {
  const { kode_kelas, nama_kelas } = kelas;
  const [result] = await db.query(
    "INSERT INTO KELAS (kode_kelas, nama_kelas) VALUES (?, ?)",
    [kode_kelas, nama_kelas]
  );
  return result.insertId;
};

// Update kelas
const updateKelas = async (kode_kelas, kelas) => {
  const { nama_kelas } = kelas;
  const [result] = await db.query(
    "UPDATE KELAS SET nama_kelas = ? WHERE kode_kelas = ?",
    [nama_kelas, kode_kelas]
  );
  return result.affectedRows;
};

// Delete kelas
const deleteKelas = async kode_kelas => {
  const [result] = await db.query("DELETE FROM KELAS WHERE kode_kelas = ?", [
    kode_kelas,
  ]);
  return result.affectedRows;
};

export { getAllKelas, getKelasById, updateKelas, createKelas, deleteKelas };
