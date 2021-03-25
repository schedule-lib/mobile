import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import {
  Container,
  VerificationContainer,
  TextLabel,
  TextInput,
  ButtonVerification,
  Strong,
  ButtonContainer,
  Button,
  ButtonDisfoc,
  ButtonText,
} from "./styles";

const Landing = ({ navigation }) => {
  const [isChecking, setIsChecking] = useState(false);

  return (
    <Container>
      <StatusBar style="auto" />

      {isChecking && (
        <VerificationContainer>
          <TextLabel>Número do protocolo:</TextLabel>
          <TextInput
            placeholder="ex: 32374598465"
            autoFocus
            autoCorrect={false}
            keyboardType="number-pad"
          />

          <ButtonVerification onPress={() => setIsChecking(!isChecking)}>
            <ButtonText>Verificar</ButtonText>
          </ButtonVerification>
        </VerificationContainer>
      )}

      <Image
        style={styles.tinyLogo}
        source={require("../../assets/agend-home.png")}
        resizeMode="contain"
      />

      <Strong>Sistema de agendamento angolano</Strong>

      <View>
        <Text>Agende seus horários</Text>
        <Text>Facilite o seu processo</Text>
      </View>

      <ButtonContainer>
        <Button onPress={() => navigation.navigate("Scheduler")}>
          <ButtonText>Iniciar agendamento</ButtonText>
        </Button>
        <ButtonDisfoc onPress={() => setIsChecking(!isChecking)}>
          <ButtonText>Verificar agendamento</ButtonText>
        </ButtonDisfoc>
      </ButtonContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 130,
    height: 130,
    marginBottom: 25,
    marginTop: 30,
  },
});

export default Landing;
