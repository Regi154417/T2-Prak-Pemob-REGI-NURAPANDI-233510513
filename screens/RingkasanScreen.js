import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { mataKuliah } from '../data/jadwalData';
import { colors, getSubjectStyle } from '../theme/colors';

export default function RingkasanScreen() {
  const totalSKS = mataKuliah.reduce((sum, mk) => sum + mk.sks, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[colors.gradientStart, colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>Ringkasan Mata Kuliah</Text>
          <Text style={styles.headerSubtitle}>Semester Ganjil 2026/2027</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{mataKuliah.length}</Text>
              <Text style={styles.statLabel}>Mata Kuliah</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{totalSKS}</Text>
              <Text style={styles.statLabel}>Total SKS</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.listWrap}>
          {mataKuliah.map((item) => {
            const style = getSubjectStyle(item.nama);
            return (
              <View key={item.id} style={styles.card}>
                <View style={[styles.iconCircle, { backgroundColor: style.bg }]}>
                  <Ionicons name={style.icon} size={22} color={style.text} />
                </View>

                <View style={styles.cardBody}>
                  <View style={styles.cardTopRow}>
                    <Text style={styles.kode}>{item.kode}</Text>
                    <View style={[styles.sksBadge, { backgroundColor: style.bg }]}>
                      <Text style={[styles.sksText, { color: style.text }]}>{item.sks} SKS</Text>
                    </View>
                  </View>
                  <Text style={styles.nama}>{item.nama}</Text>
                  <View style={styles.dosenRow}>
                    <Ionicons name="person-circle-outline" size={14} color={colors.subtext} />
                    <Text style={styles.dosen}>{item.dosen}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { paddingBottom: 40 },
  header: {
    paddingTop: 24,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#fff' },
  headerSubtitle: { fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 2 },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 16,
    padding: 14,
    marginTop: 18,
  },
  statBox: { flex: 1, alignItems: 'center' },
  statDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.3)' },
  statValue: { fontSize: 22, fontWeight: '800', color: '#fff' },
  statLabel: { fontSize: 11, color: 'rgba(255,255,255,0.85)', marginTop: 2 },
  listWrap: { padding: 20 },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#1E293B',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardBody: { flex: 1 },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kode: { fontSize: 11, fontWeight: '700', color: colors.subtext, letterSpacing: 0.5 },
  sksBadge: { paddingHorizontal: 9, paddingVertical: 3, borderRadius: 20 },
  sksText: { fontSize: 11, fontWeight: '700' },
  nama: { fontSize: 16, fontWeight: '700', color: colors.text, marginTop: 4 },
  dosenRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 4 },
  dosen: { fontSize: 12, color: colors.subtext, marginLeft: 4 },
});