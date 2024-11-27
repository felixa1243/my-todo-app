import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { LoginPage } from './screen/login-page';
export default function Index() {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme ? eva.light : eva.dark}>
        <StatusBar backgroundColor={"white"} style={'inverted'} />
        <LoginPage />
      </ApplicationProvider>
    </>
  );
}


