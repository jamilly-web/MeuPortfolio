import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { fetchClassData } from '../../services/api';
import Card from '../../components/Card';

export default function Professional() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClassData('Profile').then((res) => {
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
            title={item.name}
            subtitle={item.bio}
            period={item.role}
            description={item.email}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma experiência cadastrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b1747' },
  center: { flex: 1, backgroundColor: '#1E1B2E', justifyContent: 'center', alignItems: 'center' },
  list: { padding: 16 },
  empty: { color: '#E9D5FF', textAlign: 'center', marginTop: 20 },
});