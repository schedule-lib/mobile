import React, { useState } from "react";

import { Text, StyleSheet, Alert } from "react-native";
import {
  Container,
  Box,
  TextLess,
  HourHitContainer,
  HourHitGroup,
  HourHit,
  HourHitText,
  Button,
  ButtonText,
} from "./styles";

function Timer({ navigation }) {
  const [hourSelected, setHourSelected] = useState("??");
  const [isCompleted, setIsCompleted] = useState(true);

  const hours = [
    { id: 1, hour: "10:30", status: "available" },
    { id: 2, hour: "11:30", status: "available" },
    { id: 3, hour: "23:30", status: "available" },
    { id: 4, hour: "12:30", status: "available" },
    { id: 5, hour: "15:30", status: "available" },
    { id: 6, hour: "10:30", status: "unavailable" },
    { id: 7, hour: "13:30", status: "available" },
    { id: 8, hour: "10:30", status: "available" },
    { id: 9, hour: "14:30", status: "unavailable" },
    { id: 10, hour: "17:30", status: "available" },
    { id: 11, hour: "18:30", status: "available" },
    { id: 12, hour: "19:30", status: "unavailable" },
    { id: 13, hour: "10:30", status: "unavailable" },
    { id: 14, hour: "10:30", status: "available" },
    { id: 15, hour: "10:30", status: "unavailable" },
    { id: 16, hour: "10:30", status: "available" },
    { id: 17, hour: "10:30", status: "unavailable" },
    { id: 18, hour: "10:30", status: "available" },
    { id: 19, hour: "10:30", status: "available" },
    { id: 20, hour: "10:30", status: "available" },
  ];

  function handleSelectHour(hour, status) {
    if (status === "available") {
      setHourSelected(hour);

      return 1;
    }
    if (status === "unavailable") {
      setHourSelected(Number(0));
      Alert.alert("ATENÇAO", "Seleciona apenas HÓRARIO DISPONÍVEL");

      return 0;
    }
  }
  async function completeSchedule() {
    if (hourSelected !== 0) {
      setIsCompleted(true);
      Alert.alert("Finalizado", "HORÁRIO RESERVADO", [
        {
          text: "ver protocolo",
          style: "default",
          onPress() {
            navigation.navigate("Reports");
          },
        },
      ]);

      return 1;
    }

    Alert.alert("ATENÇÃO", "SELECIONA UM HORÁRIO DISPONÍVEL");
    return 0;
  }

  return (
    <Container>
      <Text style={styles.strong}>Servico a ser agendado</Text>
      <Box styke={styles.box}>
        <Text style={styles.plainText}>renovar BI</Text>
      </Box>
      <TextLess style={styles.plainText}>Dia 03 de março de 2021</TextLess>
      <TextLess style={styles.plainText}>as {hourSelected} horas</TextLess>

      <HourHitContainer>
        <Text style={styles.strong}>Horários disponíveis</Text>

        <HourHitGroup>
          {hours.map((item) => (
            <HourHit
              key={item.id}
              status={item.status}
              onPress={() => handleSelectHour(item.hour, item.status)}
              xClicked={hourSelected}
              xItem={item.id}
            >
              <HourHitText>{item.hour}</HourHitText>
            </HourHit>
          ))}
        </HourHitGroup>

        {isCompleted && (
          <Button disabled={false} onPress={completeSchedule}>
            <ButtonText>Escolher horário</ButtonText>
          </Button>
        )}
      </HourHitContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  plainText: {
    fontSize: 18,
    color: "#121121",
  },
  strong: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#121212",
    padding: 10,
  },
});

export default Timer;
