import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  position: relative;

  flex: 1;
  justify-content: flex-start;
  padding: 10px;

  background-color: ${(props) => (props.isSaving ? `#323232` : `#fff`)};
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
export const Strongless = styled.Text`
  font-weight: bold;
  font-size: 20px;
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
  display: ${(props) => (props.isSaving ? `none` : `flex`)};
  align-items: center;
  justify-content: center;

  height: 44px;
  width: 90%;
  background-color: ${(props) => (props.isSaving ? `#323232` : `#5929cc`)};
  border-radius: 6px;

  margin: 15px auto;
`;
export const ButtonText = styled.Text`
  color: ${(props) => (props.isSaving ? `#121212` : `#fff`)};
  font-weight: bold;
  font-size: 18px;
`;

// SCRRENSHOT SAVED_TO_IMAGE_PATH
export const ScreenshotContainer = styled.View`
  z-index: 1;

  position: absolute;
  bottom: 30px;
  left: 20px;

  background-color: #dedede;
  border-radius: 6px;
  max-height: 500px;
  /* padding: 0 10px; */
`;

export const Screenshot = styled.Image`
  width: 200px;
  height: 300px;
  margin: 0 15px;
  margin-top: 5px;
`;

export const Closer = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;
`;
