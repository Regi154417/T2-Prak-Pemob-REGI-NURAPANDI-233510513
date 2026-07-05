import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RingkasanScreen from './screens/RingkasanScreen';
import PertemuanScreen from './screens/PertemuanScreen';
import JadwalHarianScreen from './screens/JadwalHarianScreen';
import { colors } from './theme/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.subtext,
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            paddingTop: 6,
            borderTopColor: colors.border,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Ringkasan') iconName = 'book-outline';
            else if (route.name === 'Pertemuan') iconName = 'list-outline';
            else if (route.name === 'Jadwal') iconName = 'calendar-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Ringkasan" component={RingkasanScreen} />
        <Tab.Screen name="Pertemuan" component={PertemuanScreen} />
        <Tab.Screen name="Jadwal" component={JadwalHarianScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}