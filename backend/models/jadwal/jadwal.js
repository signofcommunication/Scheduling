import db from "../../database/db.js";

const getAllJadwal = async () => {
  const [rows] = await db.query("SELECT * FROM JADWAL");
  return rows;
};

// Get jadwal by id_jadwal
const getJadwalById = async id_jadwal => {
  const [rows] = await db.query("SELECT * FROM JADWAL WHERE id_jadwal = ?", [
    id_jadwal,
  ]);
  return rows[0];
};

// Create new jadwal
const createJadwal = async jadwal => {
  const {
    kode_mk,
    id_dosen,
    kode_kelas,
    kode_ruang,
    hari,
    jam_mulai,
    jam_selesai,
    semester,
  } = jadwal;
  const [result] = await db.query(
    `INSERT INTO JADWAL (kode_mk, id_dosen, kode_kelas, kode_ruang, hari, jam_mulai, jam_selesai, semester)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      kode_mk,
      id_dosen,
      kode_kelas,
      kode_ruang,
      hari,
      jam_mulai,
      jam_selesai,
      semester,
    ]
  );
  return result.insertId;
};

// Update jadwal
const updateJadwal = async (id_jadwal, jadwal) => {
  const {
    kode_mk,
    id_dosen,
    kode_kelas,
    kode_ruang,
    hari,
    jam_mulai,
    jam_selesai,
    semester,
  } = jadwal;
  const [result] = await db.query(
    `UPDATE JADWAL 
       SET kode_mk = ?, id_dosen = ?, kode_kelas = ?, kode_ruang = ?, hari = ?, jam_mulai = ?, jam_selesai = ?, semester = ?
       WHERE id_jadwal = ?`,
    [
      kode_mk,
      id_dosen,
      kode_kelas,
      kode_ruang,
      hari,
      jam_mulai,
      jam_selesai,
      semester,
      id_jadwal,
    ]
  );
  return result.affectedRows;
};

// Delete jadwal
const deleteJadwal = async id_jadwal => {
  const [result] = await db.query("DELETE FROM JADWAL WHERE id_jadwal = ?", [
    id_jadwal,
  ]);
  return result.affectedRows;
};

export {
  createJadwal,
  getAllJadwal,
  getJadwalById,
  updateJadwal,
  deleteJadwal,
};
