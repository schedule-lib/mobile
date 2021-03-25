import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
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
                placeholder="Seleciona uma cidade"
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
                placeholder="Seleciona um ponto"
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

        {/* <HitMapContainer>
        <HitMonthContainer>
          <View>
            <PrevGroup>
              <Text>anterior</Text>
            </PrevGroup>
            <NextGroup>
              <Text>Próximo</Text>
            </NextGroup>
          </View>

          <View>
            <Text>FEVEREIRO</Text>
          </View>
        </HitMonthContainer>

        <HitMapWeekContainer></HitMapWeekContainer>

        <DescriptionContainer>
          <WhiteGroup>
            <Text>Disponível</Text>
          </WhiteGroup>

          <RedGroup>
            <Text>Indisponível</Text>
          </RedGroup>

          <GreenGroup>
            <Text>Selecionado</Text>
          </GreenGroup>
        </DescriptionContainer>
      </HitMapContainer> */}
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
