import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDosen } from "../../services/dosenService";

function AddDosen() {
  const [dosen, setDosen] = useState({ id_dosen: "", nama_dosen: "" });
  const navigate = useNavigate();

  const handleChange = e => {
    setDosen({ ...dosen, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createDosen(dosen);
      navigate("/"); // Redirect ke halaman daftar dosen
    } catch (error) {
      console.error("Failed to add dosen:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add Dosen</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">ID Dosen</label>
            <input
              type="text"
              name="id_dosen"
              value={dosen.id_dosen}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Dosen</label>
            <input
              type="text"
              name="nama_dosen"
              value={dosen.nama_dosen}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDosen;
