import styled from 'styled-components';

export const CaseContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
`;

export const Img = styled.img`
  width: 250px;
  position: absolute;
  left: -7rem;
`;

export const CaseData = styled.div``;

export const Text = styled.p`
  margin-bottom: 1.5rem;
  line-height: ${({ theme }) => theme.fonts.textLineHeight};
`;