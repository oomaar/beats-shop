import styled from 'styled-components';
import { largeScreen, xLargeScreen } from '../../global/styles/GlobalStyle';

export const SponsorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(110px, 1fr));
  row-gap: 5rem;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: ${largeScreen})  {
    grid-template-columns: repeat(4, 25%);
  }
`;

export const SponsorImage = styled.img`
  width: 90px;

  @media screen and (min-width: ${xLargeScreen}) {
    width: 100px;
  }
`;