# 📚 Sistem Jadwal Kuliah

Aplikasi mobile berbasis **React Native (Expo)** untuk menampilkan informasi jadwal perkuliahan mahasiswa secara terstruktur. Dibuat sebagai tugas praktikum mata kuliah **Pemrograman Mobile** dengan topik *Handling Lists & Data Rendering*.

Aplikasi ini mendemonstrasikan tiga teknik rendering list di React Native:
- `.map()` — untuk ringkasan mata kuliah
- `FlatList` — untuk daftar pertemuan
- `SectionList` — untuk jadwal per hari

---

## 📱 Tampilan Aplikasi

| Ringkasan Mata Kuliah | Daftar Pertemuan | Jadwal per Hari |
|---|---|---|
| Menampilkan seluruh matkul dengan info SKS & dosen | Timeline pertemuan dengan separator & header | Dikelompokkan per hari dengan section header |

---

## ✨ Fitur Utama

- ✅ **Halaman Ringkasan Mata Kuliah** — render data menggunakan `.map()`, lengkap dengan `key` unik, kode matkul, SKS, dan dosen pengampu
- ✅ **Halaman Daftar Pertemuan** — menggunakan `FlatList` dengan implementasi lengkap:
  - `keyExtractor` — key unik per item
  - `ItemSeparatorComponent` — pemisah visual antar item
  - `ListHeaderComponent` — header judul halaman
  - `ListEmptyComponent` — tampilan saat data kosong
- ✅ **Halaman Jadwal per Hari** — menggunakan `SectionList` dengan section header (nama hari) yang tampil beda secara visual dari item biasa
- ✅ Desain modern dengan gradient header, ikon dinamis per mata kuliah, dan card-based UI
- ✅ Seluruh data bersumber dari **array statis** (hardcoded), tidak menggunakan API eksternal

---

## 🛠️ Tech Stack

| Teknologi | Kegunaan |
|---|---|
| [Expo](https://expo.dev/) | Framework & tooling React Native |
| React Native | Core framework mobile |
| [@react-navigation/native](https://reactnavigation.org/) | Navigasi antar halaman |
| [@react-navigation/bottom-tabs](https://reactnavigation.org/) | Navigasi tab di bagian bawah |
| [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) | Efek gradient pada header |
| [@expo/vector-icons](https://icons.expo.fyi/) | Ikon (Ionicons) |

---

## 📂 Struktur Proyek
JadwalKuliahApp/
├── App.js                        # Entry point & konfigurasi navigasi (bottom tabs)
├── data/
│   └── jadwalData.js             # Seluruh data statis (mata kuliah, pertemuan, jadwal harian)
├── screens/
│   ├── RingkasanScreen.js        # Halaman ringkasan mata kuliah (.map())
│   ├── PertemuanScreen.js        # Halaman daftar pertemuan (FlatList)
│   └── JadwalHarianScreen.js     # Halaman jadwal per hari (SectionList)
├── theme/
│   └── colors.js                 # Palet warna & style per mata kuliah
├── package.json
└── README.md


---

## 🚀 Instalasi & Menjalankan Proyek

### Prasyarat
- [Node.js](https://nodejs.org/) (LTS terbaru direkomendasikan)
- [Expo Go](https://expo.dev/go) terpasang di HP (Android/iOS) untuk testing langsung
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
```bash
   git clone https://github.com/username/JadwalKuliahApp.git
   cd JadwalKuliahApp
```

2. **Install dependencies**
```bash
   npm install
```

   > ⚠️ Jika muncul error `ERESOLVE unable to resolve dependency tree`, jalankan:
   > ```bash
   > npm config set legacy-peer-deps true
   > npm install
   > ```

3. **Jalankan proyek**
```bash
   npx expo start
```

4. **Buka aplikasi**
   - Scan QR code yang muncul di terminal menggunakan aplikasi **Expo Go**
   - Atau tekan `a` untuk membuka di Android emulator
   - Atau tekan `i` untuk membuka di iOS simulator (khusus macOS)

---

## 📦 Instalasi Manual dari Awal (Opsional)

Jika ingin membuat ulang proyek ini dari nol:

```bash
# Buat project Expo baru
npx create-expo-app JadwalKuliahApp --template blank
cd JadwalKuliahApp

# Install navigasi
npx expo install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context

# Install ikon & gradient
npx expo install @expo/vector-icons
npx expo install expo-linear-gradient

# Jalankan
npx expo start
```

---

## 🗂️ Struktur Data

Semua data didefinisikan secara statis di `data/jadwalData.js`, terbagi menjadi 3 array utama:

### 1. `mataKuliah`
Array berisi daftar mata kuliah semester ini.
```javascript
{
  id: 'MK001',
  kode: 'IF301',
  nama: 'Pemrograman Mobile',
  sks: 3,
  dosen: 'Dr. Andi Saputra, M.Kom',
}
```

### 2. `pertemuan`
Array berisi 11 data pertemuan dari seluruh mata kuliah (memenuhi syarat minimal 10 item).
```javascript
{
  id: 'PT001',
  matkul: 'Pemrograman Mobile',
  pertemuanKe: 1,
  topik: 'Pengenalan React Native & Expo',
  tanggal: '01 Sep 2026',
}
```

### 3. `jadwalPerHari`
Array berformat khusus untuk `SectionList`, dikelompokkan berdasarkan hari (`title` + `data`).
```javascript
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
  ],
}
```

---

## 🧭 Navigasi Aplikasi

Aplikasi menggunakan **Bottom Tab Navigator** dengan 3 tab:

| Tab | Halaman | Komponen List |
|---|---|---|
| 📖 Ringkasan | Ringkasan Mata Kuliah | `.map()` |
| 📋 Pertemuan | Daftar Pertemuan | `FlatList` |
| 📅 Jadwal | Jadwal per Hari | `SectionList` |

---

## 🐛 Troubleshooting

**Error `ERESOLVE unable to resolve dependency tree` saat install**
```bash
npm config set legacy-peer-deps true
npm install
```

**Error versi paket tidak cocok dengan Expo SDK**
```bash
npx expo install --check
npx expo install --fix
```

**Cache Metro bermasalah / perubahan tidak muncul**
```bash
npx expo start -c
```

---

## 👤 Informasi Tugas

| Item | Keterangan |
|---|---|
| Mata Kuliah | Pemrograman Mobile |
| Topik | Handling Lists & Data Rendering |
| Nama | *(Regi Nurapandi)* |
| NIM | *(233510513)* |
| Kelas | *(6B)* |

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan tugas akademik dan bebas digunakan untuk tujuan pembelajaran.