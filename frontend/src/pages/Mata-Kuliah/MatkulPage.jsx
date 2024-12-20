import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMatkul, deleteMataKuliah } from "../../services/matkulService";

function MatkulPage() {
  const [matkul, setMatkul] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllMatkul();
        setMatkul(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteMataKuliah(id);
      setMatkul(matkul.filter(matkulItem => matkulItem.kode_mk !== id));
    } catch (err) {
      console.error("Failed to delete Mata Kuliah:", err);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="min-h-80 bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Daftar Mata Kuliah
          </h1>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kode Mata Kuliah
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Mata Kuliah
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {matkul.map(matkulItem => (
                <tr key={matkulItem.kode_mk}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {matkulItem.kode_mk}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {matkulItem.nama_mk}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {matkulItem.sks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link
                      to={`/mata-kuliah/edit/${matkulItem.kode_mk}`}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(matkul.kode_mk)}
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

export default MatkulPage;
