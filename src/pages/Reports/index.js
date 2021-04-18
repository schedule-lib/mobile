import React, { useState } from "react";
import { captureScreen } from "react-native-view-shot";

import { Image, StyleSheet, Alert, Text, CameraRoll } from "react-native";

import {
  Container,
  ReportBody,
  Header,
  ScreenshotContainer,
  Screenshot,
  Closer,
  Hr,
  ReportContent,
  Div,
  Strong,
  Strongless,
  P,
  ListDetail,
  Detail,
  Span,
  Spanless,
  TextLess,
  Button,
  ButtonText,
} from "./styles";

function Reports() {
  const [imageURI, setImageURI] = useState(null);
  const [, setSavedImagePath] = useState("");
  const [isImageView, setIsImageView] = useState(false);

  const takeScreenShot = () => {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    }).then(
      (uri) => {
        setSavedImagePath(uri);
        setImageURI(uri);
        setIsImageView(true);
      },
      (error) => Alert.alert("Tente novamente", error)
    );
  };

  function closeScreenshot() {
    if (isImageView) setIsImageView(false);
  }

  return (
    <Container isSaving={isImageView}>
      {isImageView && (
        <ScreenshotContainer>
          <Strong>Imagem salva na galeria</Strong>

          <Screenshot
            source={{ uri: imageURI }}
            style={{
              resizeMode: "contain",
            }}
          />

          <Closer onPress={closeScreenshot}>
            <Strongless>fechar</Strongless>
          </Closer>
        </ScreenshotContainer>
      )}

      <ReportBody>
        <Header>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/agend-home.png")}
            resizeMode="contain"
          />

          <TextLess>Serviço de agendamento</TextLess>
          <Hr></Hr>
        </Header>

        <ReportContent>
          <Div>
            <Strong>Código: 234589034850986</Strong>
            <P>Campinas/SP, 12/03/2020</P>
          </Div>

          <Div>
            <Strong>DADOS PESSOAIS</Strong>
            <ListDetail>
              <Detail>
                <Span>Número do BI:</Span>
                <Spanless>22354578980085632345</Spanless>
              </Detail>

              <Detail>
                <Span>Nome completo:</Span>
                <Spanless>elias alexandre</Spanless>
              </Detail>

              <Detail>
                <Span>Data de nascimento:</Span>
                <Spanless>07/03/2021</Spanless>
              </Detail>
            </ListDetail>
          </Div>

          <Div>
            <Strong>DADOS DO AGENDAMENTO</Strong>
            <ListDetail>
              <Detail>
                <Span>Data/Hora do Agendamento:</Span>
                <Spanless>22/01/2020 14:30</Spanless>
              </Detail>

              <Detail>
                <Span>Posto:</Span>
                <Spanless>PSD/WSD/DWE - Posto de criação de BI</Spanless>
              </Detail>
            </ListDetail>
          </Div>

          <Div>
            <Strong>ENDEREÇO DO POSTO</Strong>
            <P>
              Rodovia Santos Dumont, Km 66, Edificio garagem, Bairro parque
              viracopos, Aeroporto internacional de viracopos.
            </P>
            <P>Campinas - SP - 13183344</P>
          </Div>
        </ReportContent>
      </ReportBody>

      <Button onPress={takeScreenShot} isSaving={isImageView}>
        <ButtonText isSaving={isImageView}>Baixar uma cópia</ButtonText>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 60,
    height: 60,
    marginBottom: 5,
    marginTop: 5,
  },
});

export default Reports;
