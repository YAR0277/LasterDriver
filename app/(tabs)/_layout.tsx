import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="driver"
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor:
          colorScheme === 'dark' ? '#B0B0B0' : '#666666',
      }}
    >
      <Tabs.Screen
        name="driver"
        options={{
          title: 'Driver',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="car-pickup" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
