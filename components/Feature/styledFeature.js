import styled from 'styled-components';
import { smallScreen } from '../../global/styles/GlobalStyle';

export const FeatureContainer = styled.div`
  display: grid;
`;

export const ImageContainer = styled.div`
  img {
    width: 250px;
    position: absolute;
    top: -16rem;
    right: 1.5rem;

    @media screen and (max-width: ${smallScreen}) {
      width: 200px;
    }
  }
`;

export const HomeData = styled.div`
  padding-top: 5rem;

  @media screen and (max-width: ${smallScreen}) {
    padding: 1rem;
  }
`;

export const HomeHeader = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.biggestFontSize};
  background: ${({ theme }) => theme.colors.textGradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  position: absolute;
  top: -6rem;
  left: 1rem;
  line-height: 6rem;

  @media screen and (max-width: ${smallScreen}) {
    top: -4rem;
    font-size: ${({ theme }) => theme.fonts.biggerFontSize};
  }
`;

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.bigFontSize};
  margin-bottom: 2.5rem;
`;

export const HomeFooter = styled.div``;

export const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.h3FontSize};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  margin-bottom: 2.5rem;
  line-height: ${({ theme }) => theme.fonts.textLineHeight};

  @media screen and (max-width: ${smallScreen}) {
    font-size: ${({ theme }) => theme.fonts.smallFontSize};
  }
`;

export const HomePrice = styled.span`
  font-size: ${({ theme }) => theme.fonts.h3FontSize};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semiBold};
  margin-left: 0.75rem;
`;

export const ButtonIcon = styled.div`
  font-size: 1.2rem;
`;

export const ButtonSpan = styled.span``;