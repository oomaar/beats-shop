import styled from 'styled-components';
import { smallScreen } from '../../global/styles/GlobalStyle';

export const CaseContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: ${smallScreen}) {
    grid-template-columns: 0.6fr 1fr;
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
`;

export const CaseData = styled.div``;

export const Text = styled.p`
  margin-bottom: 1.5rem;
  line-height: ${({ theme }) => theme.fonts.textLineHeight};
`;