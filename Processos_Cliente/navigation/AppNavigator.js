// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import EsqueciSenhaScreen from '../screens/EsqueciSenhaScreen';
import ProcessosScreen from '../screens/ProcessosScreen';
import DetalhesProcessoScreen from '../screens/DetalhesProcessoScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenhaScreen} />
      <Stack.Screen name="Processos" component={ProcessosScreen} />
      <Stack.Screen name="DetalhesProcesso" component={DetalhesProcessoScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
