import { useState } from "react";
import { Container } from "../../global";
import {
    MainHeader,
    Nav,
    Logo,
    NavMenu,
    NavList,
    NavItem,
    NavLink,
    NavClose,
    NavToggle,
} from "./styledHeader";

export const Header = ({ data }) => {
    const [showMenu, setShowMenu] = useState(false);

    const linksList = data.map(link => (
        <NavItem key={link.id}>
            <NavLink onClick={() => setShowMenu(false)} href={link.href}>{link.title}</NavLink>
        </NavItem>
    ));

    return (
        <MainHeader>
            <Container>
                <Nav>
                    <Logo href="#">
                        <img
                            src="/img/logo.png"
                            alt="Beats Logo"
                        />
                    </Logo>

                    <NavMenu showMenu={showMenu}>
                        <NavList>
                            {linksList}
                        </NavList>
                        <NavClose onClick={() => setShowMenu(false)}>
                            <i className="ri-close-line"></i>
                        </NavClose>
                    </NavMenu>
                    <NavToggle onClick={() => setShowMenu(true)}>
                        <i className="ri-function-line"></i>
                    </NavToggle>
                </Nav>
            </Container>
        </MainHeader>
    )
}
