import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDosenById, updateDosen } from "../../services/dosenService";

function EditDosenPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [namaDosen, setNamaDosen] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsFetching(true);
        const dosenData = await getDosenById(id);
        setNamaDosen(dosenData.nama_dosen);
        setError("");
      } catch (err) {
        setError("Gagal mengambil data dosen");
        console.error(err);
      } finally {
        setIsFetching(false);
      }
    }
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    if (!namaDosen.trim()) {
      setError("Nama dosen tidak boleh kosong");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const updatedDosen = { id_dosen: id, nama_dosen: namaDosen.trim() };
      await updateDosen(id, updatedDosen);
      navigate("/");
    } catch (error) {
      setError("Gagal memperbarui data dosen");
      console.error("Failed to update dosen:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="text-center text-white">Memuat data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-white hover:text-blue-300 flex items-center transition-colors"
        >
          ← Kembali
        </button>

        {/* Main Form Card */}
        <div className="bg-gray-800 rounded-lg shadow-2xl p-6 border border-gray-700">
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Edit Data Dosen
          </h1>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-500 text-red-200 rounded-md">
              {error}
            </div>
          )}

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="nama_dosen"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Nama Dosen
              </label>
              <input
                type="text"
                id="nama_dosen"
                value={namaDosen}
                onChange={e => setNamaDosen(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md 
                          text-white placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Masukkan nama dosen"
                disabled={isLoading}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={() => navigate("/")}
                disabled={isLoading}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md
                         transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Batal
              </button>
              <button
                onClick={handleUpdate}
                disabled={isLoading}
                className={`px-4 py-2 text-white rounded-md transition-colors
                          ${
                            isLoading
                              ? "bg-blue-600/50 cursor-not-allowed"
                              : "bg-blue-600 hover:bg-blue-500"
                          }`}
              >
                {isLoading ? "Memproses..." : "Simpan Perubahan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditDosenPage;
