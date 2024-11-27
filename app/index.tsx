import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { LoginPage } from './screens/login-page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from './screens/dashboard';
import { Platform, UIManager } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Index() {
  const [theme, setTheme] = useState(true);
  if (!Platform.OS === "ios" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
  return (
    <ApplicationProvider {...eva} theme={theme ? eva.light : eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor={"white"} style={'inverted'} />
      <Stack.Navigator>
        <Stack.Screen name='login' component={LoginPage} options={{
          headerShown: false,
          animation: "simple_push"
        }} />
        <Stack.Screen name='dashboard' component={
          Dashboard
        } options={{
          headerShown: false,
          animation:"fade"
        }} />
      </Stack.Navigator>
    </ApplicationProvider>
  );
}
const springAnimtaiton = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}