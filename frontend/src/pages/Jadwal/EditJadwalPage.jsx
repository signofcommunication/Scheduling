import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJadwalById, updateJadwal } from "../../services/jadwalService";

function EditJadwalPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hari, setHari] = useState("");
  const [idDosen, setIdDosen] = useState("");
  const [idJadwal, setIdJadwal] = useState("");
  const [jamMulai, setJamMulai] = useState("");
  const [jamSelesai, setJamSelesai] = useState("");
  const [kodeKelas, setKodeKelas] = useState("");
  const [kodeMk, setKodeMk] = useState("");
  const [kodeRuang, setKodeRuang] = useState("");
  const [semester, setSemester] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const jadwal = await getJadwalById(id);
        setHari(jadwal.hari);
        setIdDosen(jadwal.id_dosen);
        setIdJadwal(jadwal.id_jadwal);
        setJamMulai(jadwal.jam_mulai);
        setJamSelesai(jadwal.jam_selesai);
        setKodeKelas(jadwal.kode_kelas);
        setKodeMk(jadwal.kode_mk);
        setKodeRuang(jadwal.kode_ruang);
        setSemester(jadwal.semester);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    setIsLoading(true); // Set loading sebelum mengupdate
    try {
      const updatedJadwal = {
        hari,
        id_dosen: idDosen,
        id_jadwal: idJadwal,
        jam_mulai: jamMulai,
        jam_selesai: jamSelesai,
        kode_kelas: kodeKelas,
        kode_mk: kodeMk,
        kode_ruang: kodeRuang,
        semester,
      };
      await updateJadwal(id, updatedJadwal);
      navigate("/jadwal"); // Kembali ke halaman kelas setelah update
    } catch (error) {
      console.error("Failed to update kelas:", error);
    } finally {
      setIsLoading(false); // Set loading false setelah selesai
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-6">
          Edit Jadwal
        </h2>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Nama Hari
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={hari}
            onChange={e => setHari(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama kelas"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Id Dosen
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={idDosen}
            onChange={e => setIdDosen(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan ID Dosen"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Id Jadwal
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={idJadwal}
            onChange={e => setIdJadwal(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan ID jadwal"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Jam Mulai
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={jamMulai}
            onChange={e => setJamMulai(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Jam Mulai"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Jam Mulai
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={jamSelesai}
            onChange={e => setJamSelesai(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Jam Selesai"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Kode Kelas
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={kodeKelas}
            onChange={e => setKodeKelas(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Kode Kelas"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Kode MK
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={kodeMk}
            onChange={e => setKodeMk(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Kode MK"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Kode Ruang
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={kodeRuang}
            onChange={e => setKodeRuang(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Kode Ruang"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Semester
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={semester}
            onChange={e => setSemester(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan Semester"
          />
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => navigate("/jadwal")}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={isLoading}
            className={`px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            }`}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditJadwalPage;
