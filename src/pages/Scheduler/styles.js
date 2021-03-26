import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: flex-start;
  /* align-items: center; */

  padding: 10px;
`;

export const Strong = styled.Text`
  font-weight: bold;
  font-size: 24px;
  padding: 7px;
`;

export const ServiceGroup = styled.View`
  /* margin: 20px auto; */
  margin-bottom: 20px;
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const TextLocal = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const Picker = styled.View`
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  width: 100%;
  height: 30px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
export const TextPicker = styled.Text`
  font-size: 20px;
`;

export const LocalView = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Local = styled.View``;

// HITMAP-CONATINER

export const HitMapContainer = styled.View`
  padding: 10px;
`;

export const HitMonthContainer = styled.View``;

export const ViewMonth = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonGroup = styled.TouchableOpacity`
  color: #121212;
  background-color: #dedede;
  border-radius: 4px;

  width: 40%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const TextGroup = styled.Text`
  font-size: 20px;
`;

export const ViewMonthText = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
export const TextMonth = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;
