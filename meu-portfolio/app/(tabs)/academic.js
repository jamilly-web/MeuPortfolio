import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { fetchClassData } from '../../services/api';
import Card from '../../components/Card';

export default function Academic() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClassData('AcademicExperience').then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#C084FC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <Card
            title={item.course}
            subtitle={item.institution}
            period={item.period}
            description={item.description}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma formação acadêmica cadastrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b1747' }, // Fundo lilás escuro harmonioso
  center: { flex: 1, backgroundColor: '#2d1c69', justifyContent: 'center', alignItems: 'center' },
  list: { padding: 16 },
  empty: { color: '#E9D5FF', textAlign: 'center', marginTop: 20 }, // Texto em lilás claro suave
});