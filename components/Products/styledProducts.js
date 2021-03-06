import styled from 'styled-components';
import { largeScreen, mediumScreen, smallScreen } from '../../global/styles/GlobalStyle';

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 1.5rem;
  padding-top: 3rem;

  @media screen and (max-width: ${smallScreen}) {
    grid-template-columns: 142px;
    justify-content: center;
  }

  @media screen and (min-width: ${mediumScreen}) {
    grid-template-columns: repeat(3, 142px);
    justify-content: center;
  }

  @media screen and (min-width: ${largeScreen}) {
    grid-template-columns: repeat(3, 162px);
    gap: 6rem 3rem;
    padding-top: 5rem;
  }
`;

export const ProductsCard = styled.article`
  position: relative;
  height: 132px;
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: grid;

  @media screen and (min-width: ${largeScreen}) {
    height: 152px;
    padding: 0.85rem;
  }
`;

export const ProductsContent = styled.div`
  align-self: flex-end;
`;

export const Img = styled.img`
  width: 80px;
  position: absolute;
  inset: 0;
  margin: 0 auto;
  top: -3rem;

  @media screen and (min-width: ${largeScreen}) {
    width: 95px;
  }
`;

export const ProductsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.smallFontSize};
`;

export const ProductsPrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.smallFontSize};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semiBold};
`;