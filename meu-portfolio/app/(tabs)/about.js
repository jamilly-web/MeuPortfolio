import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/Card';

export default function About() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
      <Card title="React Native & Expo" subtitle="Framework e Plataforma Mobile" description="Desenvolvimento multiplataforma com ambiente gerenciado Expo." />
      <Card title="Expo Router" subtitle="Navegação Baseada em Arquivos" description="Navegação fluida e moderna baseada na estrutura de diretórios." />
      <Card title="Back4App (Parse REST API)" subtitle="Back-end como Serviço (BaaS)" description="Persistência e recuperação de dados dinâmica via requisições HTTP REST." />
      
      <Text style={styles.sectionTitle}>Funcionalidade Extra Implementada</Text>
      <Card
        title="Mural Interativo de Recados e Avaliações"
        subtitle="Feedback em Tempo Real"
        description="Sistema onde qualquer visitante pode enviar mensagens e avaliações que são gravadas em tempo real no banco de dados Back4App."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1b1747' }, // Atualizado para o lilás escuro harmonioso
  content: { padding: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#81208a', marginTop: 12, marginBottom: 12 }, // Título em branco puro
});