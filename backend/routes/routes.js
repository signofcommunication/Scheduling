import express from "express";
import * as dosenControllers from "../controllers/dosenController.js";
import * as jadwalControllers from "../controllers/jadwalController.js";
import * as kelasControllers from "../controllers/kelasController.js";
import * as mataKuliahControllers from "../controllers/mataKuliahController.js";
import * as ruangControllers from "../controllers/ruangController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is running...");
});

// Dosen route
router.get("/dosen", dosenControllers.getAllDosen);
router.get("/dosen/:id", dosenControllers.getDosenById);
router.post("/dosen", dosenControllers.createDosen);
router.patch("/dosen/:id", dosenControllers.updateDosen);
router.delete("/dosen/:id", dosenControllers.deleteDosen);

// Ruang Route
router.get("/ruang", ruangControllers.getAllRuang);
router.get("/ruang/:id", ruangControllers.getRuangById);
router.post("/ruang", ruangControllers.createRuang);
router.patch("/ruang/:id", ruangControllers.updateRuang);
router.delete("/ruang/:id", ruangControllers.deleteRuang);

// Jadwal Route
router.get("/jadwal", jadwalControllers.getAllJadwal);
router.get("/jadwal/:id", jadwalControllers.getJadwalById);
router.post("/jadwal", jadwalControllers.createJadwal);
router.patch("/jadwal/:id", jadwalControllers.updateJadwal);
router.delete("/jadwal/:id", jadwalControllers.deleteJadwal);

// Kelas Route
router.get("/kelas", kelasControllers.getAllKelas);
router.get("/kelas/:id", kelasControllers.getKelasById);
router.post("/kelas", kelasControllers.createKelas);
router.patch("/kelas/:id", kelasControllers.updateKelas);
router.delete("/kelas/:id", kelasControllers.deleteKelas);

// Mata Kuliah Route
router.get("/mata-kuliah", mataKuliahControllers.getAllMataKuliah);
router.get("/mata-kuliah/:id", mataKuliahControllers.getMataKuliahById);
router.post("/mata-kuliah", mataKuliahControllers.createMataKuliah);
router.patch("/mata-kuliah/:id", mataKuliahControllers.updateMataKuliah);
router.delete("/mata-kuliah/:id", mataKuliahControllers.deleteMataKuliah);

export default router;
