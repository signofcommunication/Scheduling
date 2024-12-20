import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRuangan, deleteRuangan } from "../../services/ruanganService";

function RuanganPage() {
  const [ruangan, setRuangan] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllRuangan();
        setRuangan(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteRuangan(id);
      setRuangan(ruangan.filter(kelasItem => kelasItem.id_kelas !== id));
    } catch (err) {
      console.error("Failed to delete kelas:", err);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="min-h-80 bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Daftar Ruang
          </h1>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kode Ruang
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Ruang
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {ruangan.map(ruanganItem => (
                <tr key={ruanganItem.kode_ruang}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {ruanganItem.kode_ruang}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ruanganItem.nama_ruang}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link
                      to={`/ruang/edit/${ruanganItem.kode_ruang}`}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(ruanganItem.kode_ruang)}
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

export default RuanganPage;
