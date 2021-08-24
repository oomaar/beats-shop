import styled from 'styled-components';
import { largeScreen, mediumScreen, smallScreen } from '../../global/styles/GlobalStyle';

export const CaseContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: ${smallScreen}) {
    grid-template-columns: 0.6fr 1fr;
  }

  @media screen and (min-width: ${mediumScreen}) {
    grid-template-columns: max-content 250px;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
  }
`;

export const Img = styled.img`
  width: 250px;
  position: absolute;
  left: -7rem;

  @media screen and (max-width: ${smallScreen}) {
    width: 220px;
    top: -2rem;
    left: -9rem;
  }

  @media screen and (min-width: ${mediumScreen}) {
    position: initial;
  }

  @media screen and (min-width: ${largeScreen}) {
    width: 300px;
  }
`;

export const Text = styled.p`
  margin-bottom: 1.5rem;
  line-height: ${({ theme }) => theme.fonts.textLineHeight};

  @media screen and (min-width: ${largeScreen}) {
    margin-bottom: 2rem;
  }
`;