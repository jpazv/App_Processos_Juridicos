import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetalhesProcessoScreen = ({ route }) => {
  const { processoId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Processo {processoId}</Text>
      <Text>Informações detalhadas sobre o processo aqui...</Text>
      <Text>Status: Em andamento</Text>
      <Text>Etapa atual: Análise inicial</Text>
      <Text>Próxima etapa: Audiência</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DetalhesProcessoScreen;
