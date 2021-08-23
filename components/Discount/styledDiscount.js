import styled from 'styled-components';
import { mediumScreen } from '../../global/styles/GlobalStyle';

export const DiscountContainer = styled.div`
  display: grid;
  position: relative;
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 2rem 1.5rem;
  border-radius: 0.75rem;
  margin-top: 6rem;

  img {
    width: 300px;
    position: absolute;
    top: 4rem;
    right: -11rem;

    @media screen and (min-width: ${mediumScreen}) {
      position: initial;
    }
  }

  @media screen and (min-width: ${mediumScreen}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
  }
`;

export const DiscountAnimate = styled.div``;

export const DiscountTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.h3FontSize};
  margin-bottom: 0.75rem;
`;

export const DiscountText = styled.p`
  margin-bottom: 1rem;
`;