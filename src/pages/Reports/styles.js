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

// MIDDLE CONTENT: View
export const ReportContent = styled.ScrollView`
  padding: 20px;
`;

export const Div = styled.View`
  margin-bottom: 10px;
`;

export const Strong = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`;

export const P = styled.Text`
  font-size: 18px;
  margin-top: 5px;
`;

export const ListDetail = styled.View``;

export const Detail = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 5px;

  align-items: center;
`;

export const Span = styled.Text`
  margin-right: 5px;
  font-size: 16px;
  justify-content: center;
`;

export const Spanless = styled.Text`
  margin-right: 0;
  font-size: 15px;
`;

// BOTTOM CONTENT: Button
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
