import { useNavigate } from "react-router-dom";
import { createJadwal } from "../../services/jadwalService";
import { useState } from "react";

function AddJadwal() {
  const [jadwal, setJadwal] = useState({
    hari: "",
    id_dosen: "",
    jam_mulai: "",
    jam_selesai: "",
    kode_kelas: "",
    kode_mk: "",
    kode_ruang: "",
    semester: "",
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setJadwal({ ...jadwal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createJadwal(jadwal);
      navigate("/jadwal");
    } catch (err) {
      console.error("Failed to add jadwal:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Add Jadwal
        </h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Hari", name: "hari" },
            { label: "ID Dosen", name: "id_dosen" },
            { label: "Jam Mulai", name: "jam_mulai" },
            { label: "Jam Selesai", name: "jam_selesai" },
            { label: "Kode Kelas", name: "kode_kelas" },
            { label: "Kode MK", name: "kode_mk" },
            { label: "Kode Ruang", name: "kode_ruang" },
            { label: "Semester", name: "semester" },
          ].map(({ label, name }) => (
            <div className="mb-4" key={name}>
              <label className="block text-gray-700">{label}</label>
              <input
                type="text"
                name={name}
                value={jadwal[name]}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded"
                required
              />
            </div>
          ))}
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

export default AddJadwal;
