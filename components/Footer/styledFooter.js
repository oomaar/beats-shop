import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: grid;
  row-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
`;

export const Logo = styled.a`
  width: 2rem;
`;

export const FooterContent = styled.div``;

export const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.h3FontSize};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
  margin-bottom: 1rem;
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textColor};

  :hover {
    color: ${({ theme }) => theme.colors.whiteColor};
  }
`;

export const Form = styled.form`
  display: flex;
  column-gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.containerColor};
  width: 90%;
  color: ${({ theme }) => theme.colors.whiteColor};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: ${({ theme }) => theme.fonts.normalFontSize};
    font-family: ${({ theme }) => theme.fonts.bodyFont};
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  column-gap: 1.25rem;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.whiteColor};
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: 0.4s;

  :hover {
    background-color: ${({ theme }) => theme.colors.blackColor};
  }
`;

export const FooterCopy = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

export const HSix = styled.h6`
  font-size: ${({ theme }) => theme.fonts.smallerFontSize};
  color: ${({ theme }) => theme.colors.textColorLight};
`;