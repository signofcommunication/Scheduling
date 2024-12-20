import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRuanganById, updateRuangan } from "../../services/ruanganService";

function EditRuangPage() {
  const { id } = useParams(); // Mendapatkan id dari URL
  const navigate = useNavigate();
  const [namaRuangan, setNamaRuangan] = useState(""); // State untuk nama kelas
  const [isLoading, setIsLoading] = useState(false); // Untuk loading state

  useEffect(() => {
    async function fetchData() {
      try {
        const ruanganData = await getRuanganById(id);
        setNamaRuangan(ruanganData.nama_ruang);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    setIsLoading(true); // Set loading sebelum mengupdate
    try {
      const updatedRuangan = { kode_ruang: id, nama_ruang: namaRuangan };
      await updateRuangan(id, updatedRuangan);
      navigate("/ruang"); // Kembali ke halaman kelas setelah update
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
          Edit Ruangan
        </h2>

        <div className="mb-4">
          <label
            htmlFor="nama_kelas"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Nama Ruangan
          </label>
          <input
            type="text"
            id="nama_kelas"
            value={namaRuangan}
            onChange={e => setNamaRuangan(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan nama kelas"
          />
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => navigate("/kelas")}
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

export default EditRuangPage;
