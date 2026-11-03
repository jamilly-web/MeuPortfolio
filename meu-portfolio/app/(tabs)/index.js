import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { fetchClassData } from '../../services/api';

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const data = await fetchClassData('Profile');
      if (data.length > 0) setProfile(data[0]);
      setLoading(false);
    }
    loadProfile();
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
      <Image
        source={require('../../assets/minha-foto.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>{profile?.name || 'jamilly'}</Text>
      <Text style={styles.role}>{profile?.role || 'Desenvolvedor Full Stack'}</Text>
      <Text style={styles.bio}>{profile?.bio || 'Bem-vindo ao meu portfólio!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#1b1747', // Fundo lilás escuro harmonioso
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  center: { 
    flex: 1, 
    backgroundColor: '#1E1B2E', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  avatar: { 
    width: 130, 
    height: 130, 
    borderRadius: 65, 
    marginBottom: 20, 
    borderWidth: 3, 
    borderColor: '#C084FC' // Borda em lilás vibrante
  },
  name: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#FFFFFF', // Texto em branco puro
    marginBottom: 6 
  },
  role: { 
    fontSize: 16, 
    color: '#D8B4FE', // Lilás claro secundário para o cargo
    fontWeight: '600', 
    marginBottom: 16 
  },
  bio: { 
    fontSize: 14, 
    color: '#C084FC', // Lilás muito suave para a bio
    textAlign: 'center', 
    paddingHorizontal: 20, 
    lineHeight: 22 
  },
});