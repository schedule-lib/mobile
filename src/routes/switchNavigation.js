import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// PAGES
import Landing from "../pages/Landing";
import Scheduler from "../pages/Scheduler";

const Stack = createStackNavigator();

function Switch() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        options={
          {
            // headerShown: false,
          }
        }
        name="Scheduler"
        component={Scheduler}
      />
    </Stack.Navigator>
  );
}

export default Switch;
