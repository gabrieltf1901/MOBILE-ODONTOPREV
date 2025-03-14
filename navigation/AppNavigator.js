import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ConsultasScreen from '../screens/ConsultasScreen';
import FaturamentoScreen from '../screens/FaturamentoScreen';
import HomeScreen from '../screens/HomeScreen';
import PacientesScreen from '../screens/PacientesScreen';
import ProfissionaisScreen from '../screens/ProfissionaisScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Odontoprev' }}
                />
                <Stack.Screen
                    name="Consultas"
                    component={ConsultasScreen}
                    options={{ title: 'Consultas' }}
                />
                <Stack.Screen
                    name="Faturamento"
                    component={FaturamentoScreen}
                    options={{ title: 'Faturamento' }}
                />
                <Stack.Screen
                    name="Pacientes"
                    component={PacientesScreen}
                    options={{ title: 'Pacientes' }}
                />
                <Stack.Screen
                    name="Profissionais"
                    component={ProfissionaisScreen}
                    options={{ title: 'Profissionais' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
