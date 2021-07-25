import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import * as S from "./styles";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <S.CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </S.Container>
  );
}
