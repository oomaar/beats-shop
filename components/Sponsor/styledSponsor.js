import styled from 'styled-components';

export const SponsorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(110px, 1fr));
  row-gap: 5rem;
  justify-items: center;
  align-items: center;
`;

export const SponsorImage = styled.img`
  width: 90px;
`;