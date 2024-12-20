import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DosenPage from "./pages/Dosen/DosenPage";
import EditDosenPage from "./pages/Dosen/EditDosenPage";
import KelasPage from "./pages/Kelas/KelasPage";
import EditKelasPage from "./pages/Kelas/EditKelasPage";
import RuanganPage from "./pages/Ruangan/RuanganPage";
import EditRuangPage from "./pages/Ruangan/EditRuangan";
import MatkulPage from "./pages/Mata-Kuliah/MatkulPage";
import EditMatkulPage from "./pages/Mata-Kuliah/EditMatkulPage";
import JadwalPage from "./pages/Jadwal/JadwalPage";
import EditJadwalPage from "./pages/Jadwal/EditJadwalPage";
import Home from "./pages/Home/Home";
import AddDosen from "./pages/Dosen/AddDosen";
import AddJadwalPage from "./pages/Jadwal/AddJadwalPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dosen" element={<DosenPage />} />
        <Route path="/add-dosen" element={<AddDosen />} />
        <Route path="/edit-dosen/:id" element={<EditDosenPage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/kelas/edit/:id" element={<EditKelasPage />} />
        <Route path="/ruang" element={<RuanganPage />} />
        <Route path="/ruang/edit/:id" element={<EditRuangPage />} />
        <Route path="/mata-kuliah" element={<MatkulPage />} />
        <Route path="/mata-kuliah/edit/:id" element={<EditMatkulPage />} />
        <Route path="/jadwal" element={<JadwalPage />} />
        <Route path="/add-jadwal" element={<AddJadwalPage />} />
        <Route path="/jadwal/edit/:id" element={<EditJadwalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
