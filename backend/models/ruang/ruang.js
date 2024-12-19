import db from "../../database/db.js";
// Get all ruang
const getAllRuang = async () => {
  const [rows] = await db.query("SELECT * FROM RUANG");
  return rows;
};

// Get ruang by kode_ruang
const getRuangById = async kode_ruang => {
  const [rows] = await db.query("SELECT * FROM RUANG WHERE kode_ruang = ?", [
    kode_ruang,
  ]);
  return rows[0];
};

// Create new ruang
const createRuang = async ruang => {
  const { kode_ruang, nama_ruang } = ruang;
  const [result] = await db.query(
    "INSERT INTO RUANG (kode_ruang, nama_ruang) VALUES (?, ?)",
    [kode_ruang, nama_ruang]
  );
  return result.insertId;
};

// Update ruang
const updateRuang = async (kode_ruang, ruang) => {
  const { nama_ruang } = ruang;
  const [result] = await db.query(
    "UPDATE RUANG SET nama_ruang = ? WHERE kode_ruang = ?",
    [nama_ruang, kode_ruang]
  );
  return result.affectedRows;
};

// Delete ruang
const deleteRuang = async kode_ruang => {
  const [result] = await db.query("DELETE FROM RUANG WHERE kode_ruang = ?", [
    kode_ruang,
  ]);
  return result.affectedRows;
};

export { deleteRuang, updateRuang, getAllRuang, getRuangById, createRuang };
