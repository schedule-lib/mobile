import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: flex-start;
  /* align-items: center; */

  padding: 10px;
`;

export const Box = styled.View`
  border: 1px solid #29292e;
`;

export const HourHitContainer = styled.View`
  padding: 10px;
  width: 99%;
  margin: 0 auto;
`;

export const HourHitGroup = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HourHit = styled.TouchableOpacity`
  width: 60px;
  height: 50px;
  border: 0.2px solid rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.status === `unavailable` ? `#ce4a4a` : `#a8a8b3`};

  ${(props) => props.xClicked === props.xItem && `background-color: #04d361`}
`;

export const HourHitText = styled.Text`
  font-size: 18px;
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
