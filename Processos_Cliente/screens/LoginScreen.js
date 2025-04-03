import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/InputField'; // Componente de Input reutilizável
import Button from '../components/Button'; // Componente de Botão

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    if (email && senha) {
      navigation.navigate('Processos');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <InputField
        label="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Cadastrar-se" onPress={() => navigation.navigate('Cadastro')} />
      <Text style={styles.link} onPress={() => navigation.navigate('EsqueciSenha')}>Esqueci a senha</Text>
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
  link: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;
