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
  height: 200px;
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
