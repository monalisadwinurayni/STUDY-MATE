<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Study Mate | SMA Negeri 1 Rengel</title>
  <style>
    /* === GLOBAL STYLE === */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background: linear-gradient(135deg, #ffe0f7, #e0f7fa, #fff8e1);
      min-height: 100vh;
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 15px;
      text-align: center;
    }

    h1 {
      font-size: 2.3em;
      color: #ff4081;
      margin-bottom: 5px;
    }

    h2 {
      font-weight: 400;
      color: #009688;
      margin-bottom: 30px;
    }

    /* === LINKTREE BUTTON STYLE === */
    .nav-buttons {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 400px;
      margin-bottom: 40px;
    }

    .nav-buttons button {
      padding: 15px;
      font-size: 1.1em;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      color: white;
      background: linear-gradient(45deg, #ff80ab, #82b1ff);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
    }

    .nav-buttons button:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
    }

    /* === SECTION STYLE === */
    section {
      display: none;
      background: white;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 800px;
      margin-bottom: 30px;
      animation: fadeIn 0.4s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    section h3 {
      color: #ff4081;
      margin-bottom: 15px;
    }

    /* === TABLE STYLE === */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }

    th {
      background-color: #f8bbd0;
      color: #4a148c;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    /* === FORM STYLE === */
    .form-input {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }

    .form-input input {
      padding: 8px 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 150px;
      font-size: 0.9em;
    }

    .form-input button {
      padding: 8px 15px;
      border: none;
      background: #4db6ac;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }

    .form-input button:hover {
      background: #00897b;
    }

    footer {
      margin-top: 30px;
      font-size: 0.9em;
      color: #666;
    }
  </style>
</head>

<body>
  <h1>Study Mate</h1>
  <h2>SMA Negeri 1 Rengel</h2>

  <div class="nav-buttons">
    <button onclick="showSection('jadwal')">📚 Jadwal Pelajaran</button>
    <button onclick="showSection('deadline')">📝 Deadline Tugas</button>
  </div>

  <!-- === JADWAL PELAJARAN === -->
  <section id="jadwal">
    <h3>Jadwal Pelajaran</h3>
    <table id="jadwalTable">
      <thead>
        <tr>
          <th>Jam</th>
          <th>Senin</th>
          <th>Selasa</th>
          <th>Rabu</th>
          <th>Kamis</th>
          <th>Jum'at</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td>2</td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td>3</td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td>4</td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td>5</td><td></td><td></td><td></td><td></td><td></td></tr>
        <tr><td>6</td><td></td><td></td><td></td><td></td><td></td></tr>
      </tbody>
    </table>

    <div class="form-input">
      <input type="number" id="jam" placeholder="Jam (1-6)">
      <input type="text" id="hari" placeholder="Hari (Senin-Jumat)">
      <input type="text" id="mapel" placeholder="Mata Pelajaran">
      <button onclick="tambahJadwal()">Tambah</button>
    </div>
  </section>

  <!-- === DEADLINE TUGAS === -->
  <section id="deadline">
    <h3>Deadline Tugas</h3>
    <table id="deadlineTable">
      <thead>
        <tr>
          <th>Nama Tugas</th>
          <th>Mata Pelajaran</th>
          <th>Tanggal</th>
          <th>Bulan</th>
          <th>Tahun</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <div class="form-input">
      <input type="text" id="namaTugas" placeholder="Nama Tugas">
      <input type="text" id="mapelTugas" placeholder="Mata Pelajaran">
      <input type="number" id="tgl" placeholder="Tanggal">
      <input type="text" id="bln" placeholder="Bulan">
      <input type="number" id="thn" placeholder="Tahun">
      <button onclick="tambahTugas()">Tambah</button>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Study Mate | SMA Negeri 1 Rengel</p>
  </footer>

  <script>
    // === NAVIGATION ===
    function showSection(id) {
      document.querySelectorAll("section").forEach((s) => (s.style.display = "none"));
      document.getElementById(id).style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // === TAMBAH JADWAL ===
    function tambahJadwal() {
      const jam = document.getElementById("jam").value;
      const hari = document.getElementById("hari").value.toLowerCase();
      const mapel = document.getElementById("mapel").value;

      const kolomHari = { senin: 1, selasa: 2, rabu: 3, kamis: 4, jumat: 5 };
      const table = document.getElementById("jadwalTable");

      if (jam >= 1 && jam <= 6 && kolomHari[hari]) {
        table.rows[jam].cells[kolomHari[hari]].innerText = mapel;
      } else {
        alert("Pastikan jam (1-6) dan hari benar (Senin–Jumat)!");
      }

      document.getElementById("jam").value = "";
      document.getElementById("hari").value = "";
      document.getElementById("mapel").value = "";
    }

    // === TAMBAH DEADLINE ===
    function tambahTugas() {
      const nama = document.getElementById("namaTugas").value;
      const mapel = document.getElementById("mapelTugas").value;
      const tgl = document.getElementById("tgl").value;
      const bln = document.getElementById("bln").value;
      const thn = document.getElementById("thn").value;

      if (!nama || !mapel || !tgl || !bln || !thn) {
        alert("Lengkapi semua kolom!");
        return;
      }

      const row = document.createElement("tr");
      row.innerHTML = `<td>${nama}</td><td>${mapel}</td><td>${tgl}</td><td>${bln}</td><td>${thn}</td>`;
      document.querySelector("#deadlineTable tbody").appendChild(row);

      document.getElementById("namaTugas").value = "";
      document.getElementById("mapelTugas").value = "";
      document.getElementById("tgl").value = "";
      document.getElementById("bln").value = "";
      document.getElementById("thn").value = "";
    }
  </script>
</body>
</html>
