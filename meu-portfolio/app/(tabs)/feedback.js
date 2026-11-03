import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchClassData, createRecord } from '../../services/api';
import Card from '../../components/Card';

export default function Feedback() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const loadFeedbacks = async () => {
    const res = await fetchClassData('Feedback');
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const handleSend = async () => {
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    await createRecord('Feedback', { name, message });
    setName('');
    setMessage('');
    setSubmitting(false);
    loadFeedbacks();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#C084FC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Deixe o seu Recado</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="O seu nome"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Escreva a sua mensagem ou avaliação..."
          placeholderTextColor="#9CA3AF"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend} disabled={submitting}>
          <Text style={styles.buttonText}>{submitting ? 'A enviar...' : 'Enviar Recado'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Mural de Mensagens</Text>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            description={item.message}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.empty}>Ainda não há recados. Seja o primeiro a deixar um!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1B2E', padding: 16 },
  center: { flex: 1, backgroundColor: '#1E1B2E', justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16, marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', marginTop: 20, marginBottom: 10 },
  form: { backgroundColor: '#2A2640', padding: 16, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#3A3357' },
  input: { backgroundColor: '#1E1B2E', color: '#FFFFFF', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#3A3357' },
  textArea: { height: 80, textAlignVertical: 'top' },
  button: { backgroundColor: '#C084FC', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#1E1B2E', fontWeight: 'bold', fontSize: 16 },
  list: { paddingBottom: 20 },
  empty: { color: '#E9D5FF', textAlign: 'center', marginTop: 20 },
});