import styled from 'styled-components';
import { headerHeight } from '../../global';
import { Link } from "react-scroll";

export const MainHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${({ scrollHeader, theme }) => scrollHeader ? theme.colors.bodyColor : "transparent"};
`;

export const Nav = styled.nav`
  height: ${headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  display: flex;
  width: 1.5rem;
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.bodyColor};
    top: ${({ showMenu }) => showMenu ? "0" : "-100%"};
    left: 0;
    width: 100%;
    padding: 4rem 0 3rem;
    transition: 0.4s;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const NavItem = styled.li`
  .active-link {
    background: ${({ theme }) => theme.colors.whiteColor};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.h2FontSize};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.fontWeight.semiBold};
  background: ${({ theme }) => theme.colors.textGradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  transition: 0.4s;

  :hover {
    background: ${({ theme }) => theme.colors.whiteColor};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const NavClose = styled.div`
  position: absolute;
  font-size: 1.5rem;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  cursor: pointer;
`;

export const NavToggle = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.whiteColor};
  cursor: pointer;
`;