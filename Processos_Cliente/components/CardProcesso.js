// src/components/CardProcesso.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CardProcesso = ({ processo, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{processo.nome}</Text>
      <Text style={styles.text}>Status: {processo.status}</Text>
      <Text style={styles.text}>Etapa atual: {processo.etapaAtual}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default CardProcesso;
