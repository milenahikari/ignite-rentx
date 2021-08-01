import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: 80px;
    height: 56px;

    background-color: ${theme.colors.shape_dark};

    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.shape};
    font-size: ${RFValue(15)}px;
  `}
`;
