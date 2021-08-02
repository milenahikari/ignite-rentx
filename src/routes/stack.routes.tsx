import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../src/screens/Home";
import { CarDetails } from "../../src/screens/CarDetails";
import { Scheduling } from "../../src/screens/Scheduling";
import { SchedulingDetails } from "../../src/screens/SchedulingDetails";
import { SchedulingComplete } from "../../src/screens/SchedulingComplete";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{ headerShown: false }}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
