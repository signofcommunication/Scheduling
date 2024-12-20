import JadwalPage from "../Jadwal/JadwalPage";
import MatkulPage from "../Mata-Kuliah/MatkulPage";
import KelasPage from "../Kelas/KelasPage";
import DosenPage from "../Dosen/DosenPage";
import RuanganPage from "../Ruangan/RuanganPage";

function Home() {
  return (
    <div>
      <JadwalPage />
      <MatkulPage />
      <KelasPage />
      <DosenPage />
      <RuanganPage />
    </div>
  );
}

export default Home;
