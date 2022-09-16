import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CameraView from "../pages/CameraView";
import FigurinhasView from "../pages/FigurinhasView";

const Stack = createNativeStackNavigator();

function PrincipalRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Camera"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Camera" component={CameraView} />
        <Stack.Screen name="Figurinhas" component={FigurinhasView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PrincipalRoute;
