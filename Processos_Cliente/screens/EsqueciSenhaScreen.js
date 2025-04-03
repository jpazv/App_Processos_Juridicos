import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/InputField'; // Componente de Input reutilizável
import Button from '../components/Button'; // Componente de Botão

const EsqueciSenhaScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecuperarSenha = () => {
    // Lógica de recuperação de senha
    if (email) {
      alert('Instruções de recuperação enviadas para o e-mail.');
      navigation.navigate('Login');
    } else {
      alert('Por favor, insira seu e-mail.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueci a Senha</Text>
      <InputField label="E-mail" value={email} onChangeText={setEmail} />
      <Button title="Enviar Instruções" onPress={handleRecuperarSenha} />
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

export default EsqueciSenhaScreen;
