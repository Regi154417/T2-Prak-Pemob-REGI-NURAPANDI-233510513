import React from 'react';
import { View, Text, StyleSheet, SectionList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { jadwalPerHari } from '../data/jadwalData';
import { colors, getSubjectStyle } from '../theme/colors';

export default function JadwalHarianScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SectionList
        sections={jadwalPerHari}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <LinearGradient
            colors={[colors.gradientStart, colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <Text style={styles.headerTitle}>Jadwal per Hari</Text>
            <Text style={styles.headerSubtitle}>Dikelompokkan berdasarkan hari kuliah</Text>
          </LinearGradient>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Ionicons name="today-outline" size={16} color="#fff" />
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => {
          const style = getSubjectStyle(item.matkul);
          return (
            <View style={styles.item}>
              <View style={styles.timeCol}>
                <Text style={styles.jam}>{item.jamMulai}</Text>
                <View style={[styles.timeDot, { backgroundColor: style.text }]} />
                <View style={styles.timeLine} />
                <Text style={styles.jamMuted}>{item.jamSelesai}</Text>
              </View>
              <View style={[styles.itemCard, { borderLeftColor: style.text }]}>
                <View style={styles.itemTopRow}>
                  <Ionicons name={style.icon} size={14} color={style.text} />
                  <Text style={[styles.matkul, { color: style.text }]}>{item.matkul}</Text>
                </View>
                <View style={styles.ruanganRow}>
                  <Ionicons name="location-outline" size={13} color={colors.subtext} />
                  <Text style={styles.ruangan}>{item.ruangan}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  listContent: { paddingBottom: 40 },
  header: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    marginBottom: 6,
  },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#fff' },
  headerSubtitle: { fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primaryDark,
    paddingVertical: 9,
    paddingHorizontal: 20,
    marginTop: 4,
  },
  sectionHeaderText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    marginLeft: 8,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 14,
  },
  timeCol: { width: 56, alignItems: 'center' },
  jam: { fontSize: 12, fontWeight: '800', color: colors.text },
  jamMuted: { fontSize: 11, color: colors.subtext, marginTop: 2 },
  timeDot: { width: 8, height: 8, borderRadius: 4, marginVertical: 4 },
  timeLine: { width: 2, flex: 1, backgroundColor: colors.border, minHeight: 20 },
  itemCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 14,
    borderLeftWidth: 4,
    padding: 14,
    marginLeft: 10,
    marginBottom: 4,
    shadowColor: '#1E293B',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  itemTopRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  matkul: { fontSize: 15, fontWeight: '800', marginLeft: 5 },
  ruanganRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 4 },
  ruangan: { fontSize: 13, color: colors.subtext, marginLeft: 4 },
});