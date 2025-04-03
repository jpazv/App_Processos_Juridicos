import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/InputField'; // Componente de Input reutilizável
import Button from '../components/Button'; // Componente de Botão

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (nome && email && senha) {
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <InputField label="Nome" value={nome} onChangeText={setNome} />
      <InputField label="E-mail" value={email} onChangeText={setEmail} />
      <InputField label="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CadastroScreen;
