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
  height: 50px;
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
  border-radius: 4px;

  width: 40%;
  justify-content: center;
  align-items: center;
  padding: 10px;

  background-color: ${(props) => (props.disabled ? `#dedede` : `#e2d6ff`)};
`;

export const TextGroup = styled.Text`
  font-size: 20px;
`;

export const ViewMonthText = styled.View`
  width: 87%;

  justify-content: center;
  align-items: center;
  margin: 0.8px auto;

  background-color: #e1e1e6;
  border-radius: 3px;
`;
export const TextMonth = styled.Text`
  font-size: 23px;
  font-weight: bold;
`;

//  DESCRIPTION:

export const DescriptionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3px;
`;

export const WhiteGroup = styled.View`
  background-color: #666666;
  border-radius: 6px;
  padding: 3px;
  margin: 5px;
`;

export const RedGroup = styled.View`
  background-color: #e83f5b;
  border-radius: 6px;
  padding: 5px;
  margin: 5px;
`;

export const GreenGroup = styled.View`
  background-color: #4cd62b;
  border-radius: 6px;
  padding: 5px;
  margin: 5px;
`;
export const TextWhite = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

// ------------------- HitMapWeekContainer -----------------

export const HitMapWeekContainer = styled.View`
  /* border: 0.5px solid black; */
  margin: 25px 0;
`;

export const DaysHitMap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

export const MonthHitGroup = styled.TouchableOpacity`
  border: 0.4px solid black;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;

  background-color: ${(props) =>
    props.status === `unavailable` ? `#ce4a4a` : `#a8a8b3`};
`;

export const MonthHit = styled.Text`
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
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
