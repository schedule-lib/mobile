import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  /* align-items: center; */
  padding: 10px;

  background-color: #fff;
`;
export const ReportBody = styled.View``;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  max-height: 120px;
`;

export const Hr = styled.View`
  border: 0.1px solid rgba(0, 0, 0, 0.5);
  background-color: #000000;
  width: 95%;
  margin-top: 10px;
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
