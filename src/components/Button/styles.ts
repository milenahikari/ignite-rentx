import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface ButtonProps extends RectButtonProps {
  color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  ${({ theme, color }) => css`
    width: 100%;

    padding: 19px;
    align-items: center;
    justify-content: center;

    background-color: ${color ? color : theme.colors.main};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
  `}
`;
