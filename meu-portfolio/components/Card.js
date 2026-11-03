import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card({ title, subtitle, period, description }) {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {period && <Text style={styles.period}>{period}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2A2542', // Lilás escuro elegante para o fundo do cartão
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#4A3E70',    // Borda num tom lilás de destaque
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',          // Texto principal em branco puro
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#C084FC',          // Lilás vibrante para subtítulos e tecnologias
    fontWeight: '600',
    marginBottom: 4,
  },
  period: {
    fontSize: 12,
    color: '#E9D5FF',          // Lilás claro para datas/período
    marginBottom: 8,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 14,
    color: '#F3E8FF',          // Lilás suave para descrições longas
    lineHeight: 20,
  },
});