// src/services/authService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = async (email, senha) => {
  try {
    // Aqui você pode integrar com uma API para autenticação real
    if (email === 'teste@teste.com' && senha === '123456') {
      await AsyncStorage.setItem('userToken', 'sampleToken'); // Salva o token de autenticação
      return true;
    } else {
      throw new Error('Credenciais inválidas');
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem('userToken'); // Remove o token de autenticação
  } catch (error) {
    console.error(error);
  }
};

const isAuthenticated = async () => {
  const userToken = await AsyncStorage.getItem('userToken');
  return userToken !== null;
};

const cadastro = async (nome, email, senha) => {
  try {
    // Aqui você pode integrar com uma API para cadastro real
    await AsyncStorage.setItem('userToken', 'sampleToken'); // Salva o token
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  login,
  logout,
  isAuthenticated,
  cadastro,
};
