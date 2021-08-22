import styled from 'styled-components';

export const ScrollLink = styled.a`
  position: fixed;
  bottom: ${({ showScroll }) => showScroll ? "5rem" : "-20%"};
  right: 1rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.containerColor};
  border-radius: 0.25rem;
  padding: 0.45rem;
  opacity: 0.9;
  z-index: 100;
  transition: 0.4s;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 1.35rem;

  :hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.blackColor};
  }
`;