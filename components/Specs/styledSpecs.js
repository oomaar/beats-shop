import styled from 'styled-components';

export const SpecsContainer = styled.div`
  display: grid;
`;

export const SpecsSubContainer = styled.div`
  display: grid;
  position: relative;
`;

export const SpecsContent = styled.div`
  display: grid;
  row-gap: 1.5rem;
`;

export const SpecsData = styled.div`
  display: grid;
  row-gap: 0.25rem;

  :nth-child(1),
  :nth-child(4) {
    margin-left: 1.5rem;
  }
`;

export const Icon = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.whiteColor};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.normalFontSize};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
`;

export const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.smallerFontSize};
`;

export const Img = styled.img`
  width: 250px;
  position: absolute;
  top: 2rem;
  right: -4rem;
`;