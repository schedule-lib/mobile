import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import {
  Container,
  Strong,
  ServiceGroup,
  Text,
  TextLocal,
  Picker,
  TextPicker,
  LocalView,
  Local,
  HitMapContainer,
  HitMonthContainer,
  ViewMonth,
  ButtonGroup,
  TextGroup,
  ViewMonthText,
  TextMonth,
  DescriptionContainer,
  WhiteGroup,
  RedGroup,
  GreenGroup,
  TextWhite,
  HitMapWeekContainer,
  DaysHitMap,
  MonthHitGroup,
  MonthHit,
} from "./styles";

const Scheduler = () => {
  const [province, setProvince] = useState("CIDADE");
  const [servicePoint, setServicePoint] = useState("PONTO");

  const days = [
    { day: 1, status: "available" },
    { day: 2, status: "available" },
    { day: 3, status: "available" },
    { day: 4, status: "available" },
    { day: 5, status: "unavailable" },
    { day: 6, status: "available" },
    { day: 7, status: "unavailable" },
    { day: 8, status: "unavailable" },
    { day: 9, status: "available" },
    { day: 10, status: "available" },
    { day: 11, status: "available" },
    { day: 12, status: "unavailable" },
    { day: 13, status: "unavailable" },
    { day: 14, status: "available" },
    { day: 15, status: "available" },
    { day: 16, status: "unavailable" },
    { day: 17, status: "unavailable" },
    { day: 18, status: "available" },
    { day: 19, status: "available" },
    { day: 20, status: "available" },
    { day: 21, status: "unavailable" },
    { day: 22, status: "available" },
    { day: 23, status: "available" },
    { day: 24, status: "unavailable" },
    { day: 25, status: "available" },
    { day: 26, status: "unavailable" },
    { day: 27, status: "available" },
    { day: 28, status: "unavailable" },
    { day: 29, status: "available" },
    { day: 30, status: "available" },
  ];

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Strong>Sistema de agendamento</Strong>

        <ServiceGroup>
          <TextLocal>O lugar onde será atendido</TextLocal>

          <LocalView>
            <Local>
              <Text>Provincia de atendimento</Text>
              <RNPickerSelect
                onValueChange={(value) => setProvince(value)}
                items={[
                  { label: "Luanda", value: "luanda", default: true },
                  { label: "Benguela", value: "benguela" },
                ]}
              >
                <Picker>
                  <TextPicker>{province}</TextPicker>
                </Picker>
              </RNPickerSelect>
            </Local>

            <Local>
              <Text>Ponto de atendimento</Text>
              <RNPickerSelect
                onValueChange={(value) => setServicePoint(value)}
                items={[
                  { label: "Murro bento", value: "Murro bento" },
                  { label: "Kilamba kiaxi", value: "Kilamba kiaxi" },
                  { label: "Simeone XYZ", value: "Simeone XYZ", default: true },
                ]}
              >
                <Picker>
                  <TextPicker>{servicePoint}</TextPicker>
                </Picker>
              </RNPickerSelect>
            </Local>
          </LocalView>
        </ServiceGroup>

        <HitMapContainer>
          <HitMonthContainer>
            <ViewMonth>
              <ButtonGroup>
                <TextGroup>anterior</TextGroup>
              </ButtonGroup>
              <ButtonGroup>
                <TextGroup>Próximo</TextGroup>
              </ButtonGroup>
            </ViewMonth>

            <ViewMonthText>
              <TextMonth>FEVEREIRO</TextMonth>
            </ViewMonthText>
          </HitMonthContainer>

          <HitMapWeekContainer>
            <Text>Selecione o dia:</Text>
            <DaysHitMap>
              {days.map((item) => (
                <MonthHitGroup key={item.day}>
                  <MonthHit>{item.day}</MonthHit>
                </MonthHitGroup>
              ))}
            </DaysHitMap>
          </HitMapWeekContainer>

          <View>
            <Text>Descrição dos dias:</Text>
            <DescriptionContainer>
              <WhiteGroup>
                <TextWhite>Disponível</TextWhite>
              </WhiteGroup>

              <RedGroup>
                <Text>Indisponível</Text>
              </RedGroup>

              <GreenGroup>
                <TextWhite>Selecionado</TextWhite>
              </GreenGroup>
            </DescriptionContainer>
          </View>
        </HitMapContainer>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollbar: {
    flex: 1,
  },
});

export default Scheduler;
