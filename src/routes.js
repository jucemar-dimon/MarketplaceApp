import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Catalog from './pages/Catalog';
import Header from './components/Header';
import Cart from './pages/Cart';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Catalog"
        screenOptions={{
          headerShown: true,
          cardStyle: {
            backgroundColor: '#313746',
          },
        }}
      >
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerBackImage: () => (
              <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />
            ),
            headerTitle: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
