import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllJadwal, deleteJadwal } from "../../services/jadwalService";

function JadwalPage() {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllJadwal();
        setJadwal(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteJadwal(id);
      setJadwal(jadwal.filter(jadwalItem => jadwalItem.id_jadwal !== id));
    } catch (err) {
      console.error("Failed to delete jadwal:", err);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="min-h-80 bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Daftar Jadwal
          </h1>
          {/* Button Add Jadwal */}
          <div className="mb-4">
            <Link
              to="/add-jadwal"
              className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
            >
              Add Jadwal
            </Link>
          </div>
          {/* Table */}
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hari
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID Dosen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID Jadwal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jam Mulai
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jam Selesai
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kode Kelas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kode MK
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kode Ruang
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Semester
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jadwal.map(jadwalItem => (
                <tr key={jadwalItem.id_jadwal}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {jadwalItem.hari}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.id_dosen}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.id_jadwal}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.jam_mulai}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.jam_selesai}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.kode_kelas}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.kode_mk}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.kode_ruang}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {jadwalItem.semester}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link
                      to={`/jadwal/edit/${jadwalItem.id_jadwal}`}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(jadwalItem.id_jadwal)}
                      className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JadwalPage;
