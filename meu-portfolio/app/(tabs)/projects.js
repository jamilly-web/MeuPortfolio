import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { fetchClassData } from '../../services/api';
import Card from '../../components/Card';

export default function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetchClassData('Projects').then((res) => { // Alterado de 'Project' para 'Projects'
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
            title={item.title}
            subtitle={item.technologies}
            description={item.description}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum projeto cadastrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b1747' },
  center: { flex: 1, backgroundColor: '#222129', justifyContent: 'center', alignItems: 'center' },
  list: { padding: 16 },
  empty: { color: '#E9D5FF', textAlign: 'center', marginTop: 20 },
});