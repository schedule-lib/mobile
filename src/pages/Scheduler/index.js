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
} from "./styles";

const Scheduler = () => {
  const [province, setProvince] = useState("CIDADE");
  const [servicePoint, setServicePoint] = useState("PONTO");

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

          {/* <HitMapWeekContainer></HitMapWeekContainer> */}

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
