import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllKelas, deleteKelas } from "../../services/kelasService";

function KelasPage() {
  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllKelas();
        setKelas(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteKelas(id);
      setKelas(kelas.filter(kelasItem => kelasItem.id_kelas !== id));
    } catch (err) {
      console.error("Failed to delete kelas:", err);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="min-h-80 bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Daftar Kelas
          </h1>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kode Kelas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Kelas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {kelas.map(kelasItem => (
                <tr key={kelasItem.kode_kelas}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {kelasItem.kode_kelas}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {kelasItem.nama_kelas}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link
                      to={`/kelas/edit/${kelasItem.kode_kelas}`}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(kelasItem.kode_kelas)}
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

export default KelasPage;
