import React from "react";

import { Image, StyleSheet } from "react-native";

import {
  Container,
  ReportBody,
  Header,
  Hr,
  TextLess,
  Button,
  ButtonText,
} from "./styles";

function Reports() {
  return (
    <Container>
      <ReportBody>
        <Header>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/agend-home.png")}
            resizeMode="contain"
          />

          <TextLess>Serviço de agendamento</TextLess>
          <Hr></Hr>
        </Header>
      </ReportBody>

      <Button>
        <ButtonText>Baixar uma cópia</ButtonText>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 60,
    height: 60,
    marginBottom: 5,
    marginTop: 5,
  },
});

export default Reports;
