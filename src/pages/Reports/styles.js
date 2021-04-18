import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: flex-start;
  /* align-items: center; */

  padding: 10px;
`;

export const TextLess = styled.Text`
  font-size: 18px;
  color: #121212;

  margin: 0 5px;
  padding: 2px 5px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 90%;
  background-color: ${(props) => (props.disabled ? `#dedede` : `#5929cc`)};
  border-radius: 6px;

  margin: 15px auto;
`;
export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;
