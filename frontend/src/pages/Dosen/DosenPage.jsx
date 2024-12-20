import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllDosen, deleteDosen } from "../../services/dosenService";

function DosenPage() {
  const [dosen, setDosen] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllDosen();
        setDosen(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const handleDelete = async id => {
    try {
      await deleteDosen(id);
      setDosen(dosen.filter(dosenItem => dosenItem.id_dosen !== id));
    } catch (error) {
      console.error("Failed to delete dosen:", error);
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="min-h-80 bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            Daftar Dosen
          </h1>
          {/* Button Add Dosen */}
          <div className="mb-4">
            <Link
              to="/add-dosen"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
            >
              Add Dosen
            </Link>
          </div>
          {/* Table */}
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID Dosen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Dosen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dosen.map(dosenItem => (
                <tr key={dosenItem.id_dosen}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {dosenItem.id_dosen}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {dosenItem.nama_dosen}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link
                      to={`/edit-dosen/${dosenItem.id_dosen}`}
                      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(dosenItem.id_dosen)}
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

export default DosenPage;
