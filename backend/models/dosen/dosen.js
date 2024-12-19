import db from "../../database/db.js";

const getAllDosen = async () => {
  const [rows] = await db.query("SELECT * FROM DOSEN");
  return rows;
};

const getDosenById = async id_dosen => {
  const [rows] = await db.query("SELECT * FROM DOSEN WHERE id_dosen = ?", [
    id_dosen,
  ]);
  return rows[0];
};

const createDosen = async dosen => {
  const { id_dosen, nama_dosen } = dosen;
  const [result] = await db.query(
    "INSERT INTO DOSEN (id_dosen, nama_dosen) VALUES (?, ?)",
    [id_dosen, nama_dosen]
  );
  return result.insertId;
};

const updateDosen = async (id_dosen, dosen) => {
  const { nama_dosen } = dosen;
  const [result] = await db.query(
    "UPDATE DOSEN SET nama_dosen = ? WHERE id_dosen = ?",
    [nama_dosen, id_dosen]
  );
  return result.affectedRows;
};

const deleteDosen = async id_dosen => {
  const [result] = await db.query("DELETE FROM DOSEN WHERE id_dosen = ?", [
    id_dosen,
  ]);
  return result.affectedRows;
};

export { getAllDosen, getDosenById, createDosen, updateDosen, deleteDosen };
