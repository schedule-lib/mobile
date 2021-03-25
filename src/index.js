import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Switch from "./routes/switchNavigation";

export default function Routes() {
  return (
    <NavigationContainer>
      <Switch />
    </NavigationContainer>
  );
}
