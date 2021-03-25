import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  position: relative;

  flex: 1;
  background-color: #d3d3d3;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
`;

export const VerificationContainer = styled.View`
  position: absolute;
  z-index: 1;
  top: 50px;

  width: 90%;
  height: 130px;
  padding: 2px 10px;

  background-color: #555555;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 6px;
`;

export const TextLabel = styled.Text`
  color: #f0ffff;
  font-weight: bold;
  font-size: 20px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;

  font-size: 18px;
  font-weight: bold;
  padding: 0 5px;

  background-color: #ffffff;
  border-radius: 4px;
`;

export const Separator = styled.View`
  margin: 0 auto;

  width: 2px;
  height: 25px;
  background-color: #000000;
`;

export const ButtonVerification = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 100%;
  background-color: #5929cc;
  border-radius: 6px;

  margin-top: 15px;
`;

export const Strong = styled.Text`
  font-size: 55px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 50px;

  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 90%;
  background-color: #5929cc;
  border-radius: 6px;
  margin-bottom: 10px;
`;
export const ButtonDisfoc = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 90%;
  background-color: #999999;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;
