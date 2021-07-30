import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;
export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  ${({ theme, active }) => css`
    width: 6px;
    height: 6px;

    background-color: ${active ? theme.colors.title : theme.colors.shape};

    margin-left: 8px;
    border-radius: 8px;
  `}
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
