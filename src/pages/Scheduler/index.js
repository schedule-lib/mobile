import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { determineCurrentMonth } from "../../utils";

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
  Button,
  ButtonText,
} from "./styles";

const Scheduler = ({ navigation }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [province, setProvince] = useState(null);
  const [servicePoint, setServicePoint] = useState(null);
  const [month, setMonth] = useState(() => {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;

    return determineCurrentMonth(currentMonth);
  });
  const [dayChoosed, setDayChoosed] = useState(0);

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

  const provinceOptions = [
    { value: "Luanda", label: "Luanda" },
    { value: "Benguela", label: "Benguela" },
  ];
  const serviceOptions = [
    { value: "kilamba kiaxi", label: "Kilamba kiaxi" },
    { value: "Murro bento", label: "Murro bento" },
    { label: "Simeone XYZ", value: "Simeone XYZ" },
  ];

  // CALENDAR FUNCTIONS
  const handleCompleted = useCallback(() => {
    if (
      province?.value &&
      servicePoint?.value &&
      month.name &&
      dayChoosed !== 0
    ) {
      setIsCompleted(true);
    }
  }, [dayChoosed]);
  function handleButtonStatus() {
    if (province?.value && servicePoint?.value) {
      return false;
    }

    return true;
  }
  function handleNextMonth() {
    if (month.id === 12) {
      return;
    }

    const currentMonth = month.id;
    const nextMonth = currentMonth + 1;

    setMonth(() => determineCurrentMonth(nextMonth));
  }
  function handlePrevMonth() {
    if (month.id === 1) {
      return;
    }

    const currentMonth = month.id;
    const prevMonth = currentMonth - 1;

    setMonth(() => determineCurrentMonth(prevMonth));
  }
  const handleChangeProvince = (selectedOption) => {
    setProvince({
      value: selectedOption,
      label: selectedOption,
    });
  };
  const handleChangeService = (selectedOption) => {
    setServicePoint({
      value: selectedOption,
      label: selectedOption,
    });
  };
  function handleDay(day, status) {
    if (status === "available") {
      setDayChoosed(+day);

      return 1;
    }
    if (status === "unavailable") {
      setDayChoosed(0);
      Alert.alert("ATENÇAO", "Seleciona apenas DIA DISPONÍVEL");

      return 0;
    }
  }
  function handleNavigate() {
    if (dayChoosed === 0) {
      Alert.alert("ATENÇÃO", "preenche todos os campos");
      return;
    }
    navigation.navigate("Timer");
  }

  useEffect(() => {
    handleCompleted();
  }, [handleCompleted]);

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
                onValueChange={(value) => handleChangeProvince(value)}
                items={provinceOptions}
              >
                <Picker>
                  <TextPicker>{province?.value || "selecionar"}</TextPicker>
                </Picker>
              </RNPickerSelect>
            </Local>

            <Local>
              <Text>Ponto de atendimento</Text>
              <RNPickerSelect
                onValueChange={(value) => handleChangeService(value)}
                items={serviceOptions}
              >
                <Picker>
                  <TextPicker>{servicePoint?.value || "selecionar"}</TextPicker>
                </Picker>
              </RNPickerSelect>
            </Local>
          </LocalView>
        </ServiceGroup>

        <HitMapContainer>
          <HitMonthContainer>
            <ViewMonth>
              <ButtonGroup
                disabled={handleButtonStatus()}
                onPress={handlePrevMonth}
              >
                <TextGroup>anterior</TextGroup>
              </ButtonGroup>
              <ButtonGroup
                disabled={handleButtonStatus()}
                onPress={handleNextMonth}
              >
                <TextGroup>Próximo</TextGroup>
              </ButtonGroup>
            </ViewMonth>

            <ViewMonthText>
              <TextMonth>{month.name}</TextMonth>
            </ViewMonthText>
          </HitMonthContainer>

          <HitMapWeekContainer>
            <Text>Selecione o dia</Text>
            <DaysHitMap>
              {days.map((item) => (
                <MonthHitGroup
                  onPress={() => handleDay(+item.day, item.status)}
                  key={item.day}
                  xClicked={dayChoosed}
                  xItem={item.day}
                  status={item.status}
                >
                  <MonthHit>{item.day}</MonthHit>
                </MonthHitGroup>
              ))}
            </DaysHitMap>

            {isCompleted && (
              <Button disabled={handleButtonStatus()} onPress={handleNavigate}>
                <ButtonText>Escolher horário</ButtonText>
              </Button>
            )}
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
