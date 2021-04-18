import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// PAGES
import Landing from "../pages/Landing";
import Scheduler from "../pages/Scheduler";
import Timer from "../pages/Timer";
import Reports from "../pages/Reports";

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
        options={{
          title: "AGENDAR",
        }}
        name="Scheduler"
        component={Scheduler}
      />
      <Stack.Screen
        options={{
          title: "Agendar Horário",
        }}
        name="Timer"
        component={Timer}
      />
      <Stack.Screen
        options={{
          title: "Protocolo de atendimento",
        }}
        name="Reports"
        component={Reports}
      />
    </Stack.Navigator>
  );
}

export default Switch;
