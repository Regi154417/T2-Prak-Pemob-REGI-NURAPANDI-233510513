export const colors = {
  primary: '#6366F1',
  primaryDark: '#4338CA',
  primaryLight: '#EEF2FF',
  secondary: '#EC4899',
  gradientStart: '#6366F1',
  gradientEnd: '#8B5CF6',
  background: '#F8FAFC',
  card: '#FFFFFF',
  text: '#0F172A',
  subtext: '#64748B',
  border: '#E2E8F0',
  accent: '#F59E0B',
  success: '#10B981',
  danger: '#EF4444',
};

// Palet warna per mata kuliah (dipakai untuk aksen kartu & ikon)
export const subjectColors = {
  'Pemrograman Mobile': { bg: '#EEF2FF', text: '#6366F1', icon: 'phone-portrait-outline' },
  'Basis Data Lanjut': { bg: '#FEF3C7', text: '#D97706', icon: 'server-outline' },
  'Kecerdasan Buatan': { bg: '#FCE7F3', text: '#DB2777', icon: 'hardware-chip-outline' },
  'Jaringan Komputer': { bg: '#D1FAE5', text: '#059669', icon: 'globe-outline' },
  'Rekayasa Perangkat Lunak': { bg: '#DBEAFE', text: '#2563EB', icon: 'construct-outline' },
  'Interaksi Manusia & Komputer': { bg: '#FFE4E6', text: '#E11D48', icon: 'color-palette-outline' },
};

export const getSubjectStyle = (name) =>
  subjectColors[name] || { bg: '#F1F5F9', text: '#475569', icon: 'book-outline' };

export default colors;