import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CardProcesso from '../components/CardProcesso'; // Componente de Card

const processos = [
  { id: '1', nome: 'Processo A', status: 'Em andamento', etapaAtual: 'Análise inicial' },
  { id: '2', nome: 'Processo B', status: 'Concluído', etapaAtual: 'Finalizado' },
];

const ProcessosScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Processos</Text>
      <FlatList
        data={processos}
        renderItem={({ item }) => (
          <CardProcesso
            processo={item}
            onPress={() => navigation.navigate('DetalhesProcesso', { processoId: item.id })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
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

export default ProcessosScreen;
