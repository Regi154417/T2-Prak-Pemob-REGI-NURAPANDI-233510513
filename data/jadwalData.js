// Data statis (hardcode) untuk seluruh aplikasi

export const mataKuliah = [
  {
    id: 'MK001',
    kode: 'IF301',
    nama: 'Pemrograman Mobile',
    sks: 3,
    dosen: 'Dr. Andi Saputra, M.Kom',
  },
  {
    id: 'MK002',
    kode: 'IF302',
    nama: 'Basis Data Lanjut',
    sks: 3,
    dosen: 'Dr. Siti Rahma, M.T',
  },
  {
    id: 'MK003',
    kode: 'IF303',
    nama: 'Kecerdasan Buatan',
    sks: 3,
    dosen: 'Prof. Budi Santoso',
  },
  {
    id: 'MK004',
    kode: 'IF304',
    nama: 'Jaringan Komputer',
    sks: 2,
    dosen: 'Ir. Hendra Wijaya, M.T',
  },
  {
    id: 'MK005',
    kode: 'IF305',
    nama: 'Rekayasa Perangkat Lunak',
    sks: 3,
    dosen: 'Dr. Maya Putri, M.Kom',
  },
  {
    id: 'MK006',
    kode: 'IF306',
    nama: 'Interaksi Manusia & Komputer',
    sks: 2,
    dosen: 'Rina Marlina, M.Kom',
  },
];

export const pertemuan = [
  {
    id: 'PT001',
    matkul: 'Pemrograman Mobile',
    pertemuanKe: 1,
    topik: 'Pengenalan React Native & Expo',
    tanggal: '01 Sep 2026',
  },
  {
    id: 'PT002',
    matkul: 'Pemrograman Mobile',
    pertemuanKe: 2,
    topik: 'Komponen Dasar & Styling',
    tanggal: '08 Sep 2026',
  },
  {
    id: 'PT003',
    matkul: 'Basis Data Lanjut',
    pertemuanKe: 1,
    topik: 'Normalisasi & Desain Skema',
    tanggal: '02 Sep 2026',
  },
  {
    id: 'PT004',
    matkul: 'Basis Data Lanjut',
    pertemuanKe: 2,
    topik: 'Indexing & Query Optimization',
    tanggal: '09 Sep 2026',
  },
  {
    id: 'PT005',
    matkul: 'Kecerdasan Buatan',
    pertemuanKe: 1,
    topik: 'Pengantar Machine Learning',
    tanggal: '03 Sep 2026',
  },
  {
    id: 'PT006',
    matkul: 'Kecerdasan Buatan',
    pertemuanKe: 2,
    topik: 'Algoritma Searching & Heuristik',
    tanggal: '10 Sep 2026',
  },
  {
    id: 'PT007',
    matkul: 'Jaringan Komputer',
    pertemuanKe: 1,
    topik: 'Model OSI & TCP/IP',
    tanggal: '04 Sep 2026',
  },
  {
    id: 'PT008',
    matkul: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 1,
    topik: 'Software Development Life Cycle',
    tanggal: '05 Sep 2026',
  },
  {
    id: 'PT009',
    matkul: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 2,
    topik: 'Requirement Engineering',
    tanggal: '12 Sep 2026',
  },
  {
    id: 'PT010',
    matkul: 'Interaksi Manusia & Komputer',
    pertemuanKe: 1,
    topik: 'Prinsip Usability & User Persona',
    tanggal: '06 Sep 2026',
  },
  {
    id: 'PT011',
    matkul: 'Interaksi Manusia & Komputer',
    pertemuanKe: 2,
    topik: 'Heuristic Evaluation & Wireframing',
    tanggal: '13 Sep 2026',
  },
];

export const jadwalPerHari = [
  {
    title: 'Senin',
    data: [
      {
        id: 'JD001',
        matkul: 'Pemrograman Mobile',
        ruangan: 'Lab RPL 2',
        jamMulai: '08:00',
        jamSelesai: '10:30',
      },
      {
        id: 'JD002',
        matkul: 'Basis Data Lanjut',
        ruangan: 'Ruang 3.2',
        jamMulai: '13:00',
        jamSelesai: '15:30',
      },
    ],
  },
  {
    title: 'Selasa',
    data: [
      {
        id: 'JD003',
        matkul: 'Kecerdasan Buatan',
        ruangan: 'Ruang 2.1',
        jamMulai: '08:00',
        jamSelesai: '10:30',
      },
    ],
  },
  {
    title: 'Rabu',
    data: [
      {
        id: 'JD004',
        matkul: 'Jaringan Komputer',
        ruangan: 'Lab Jaringan',
        jamMulai: '10:00',
        jamSelesai: '11:40',
      },
      {
        id: 'JD005',
        matkul: 'Rekayasa Perangkat Lunak',
        ruangan: 'Ruang 4.1',
        jamMulai: '13:00',
        jamSelesai: '15:30',
      },
    ],
  },
  {
    title: 'Kamis',
    data: [
      {
        id: 'JD006',
        matkul: 'Interaksi Manusia & Komputer',
        ruangan: 'Ruang 3.3',
        jamMulai: '08:00',
        jamSelesai: '09:40',
      },
    ],
  },
  {
    title: 'Jumat',
    data: [
      {
        id: 'JD007',
        matkul: 'Pemrograman Mobile',
        ruangan: 'Lab RPL 2',
        jamMulai: '13:00',
        jamSelesai: '15:30',
      },
    ],
  },
];