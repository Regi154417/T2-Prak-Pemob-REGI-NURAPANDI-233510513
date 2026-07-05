import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { pertemuan } from '../data/jadwalData';
import { colors, getSubjectStyle } from '../theme/colors';

export default function PertemuanScreen() {
  const renderItem = ({ item }) => {
    const style = getSubjectStyle(item.matkul);
    return (
      <View style={styles.item}>
        <View style={[styles.numberCircle, { backgroundColor: style.bg }]}>
          <Text style={[styles.numberText, { color: style.text }]}>{item.pertemuanKe}</Text>
        </View>
        <View style={styles.itemBody}>
          <View style={styles.matkulRow}>
            <Ionicons name={style.icon} size={13} color={style.text} />
            <Text style={[styles.matkul, { color: style.text }]}>{item.matkul}</Text>
          </View>
          <Text style={styles.topik}>{item.topik}</Text>
          <View style={styles.tanggalRow}>
            <Ionicons name="calendar-outline" size={13} color={colors.subtext} />
            <Text style={styles.tanggal}>{item.tanggal}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={pertemuan}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <LinearGradient
            colors={[colors.gradientStart, colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <Text style={styles.headerTitle}>Daftar Pertemuan</Text>
            <Text style={styles.headerSubtitle}>
              {pertemuan.length} pertemuan dari seluruh mata kuliah
            </Text>
          </LinearGradient>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyWrap}>
            <Ionicons name="calendar-clear-outline" size={48} color={colors.border} />
            <Text style={styles.emptyText}>Belum ada data pertemuan.</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  listContent: { paddingBottom: 40, flexGrow: 1 },
  header: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    marginBottom: 16,
  },
  headerTitle: { fontSize: 24, fontWeight: '800', color: '#fff' },
  headerSubtitle: { fontSize: 13, color: 'rgba(255,255,255,0.85)', marginTop: 4 },
  item: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 14,
    marginHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#1E293B',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 1,
  },
  numberCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  numberText: { fontWeight: '800', fontSize: 15 },
  itemBody: { flex: 1 },
  matkulRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  matkul: { fontSize: 11, fontWeight: '700', marginLeft: 5, letterSpacing: 0.3 },
  topik: { fontSize: 15, fontWeight: '700', color: colors.text, marginTop: 3 },
  tanggalRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5, gap: 4 },
  tanggal: { fontSize: 12, color: colors.subtext, marginLeft: 4 },
  separator: { height: 10 },
  emptyWrap: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 60 },
  emptyText: { color: colors.subtext, fontSize: 14, marginTop: 10 },
});