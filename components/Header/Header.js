import { useEffect, useState } from "react";
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
    const [scrollHeader, setScrollHeader] = useState(false);

    const showScorllHeader = () => window.scrollY > 100 ? setScrollHeader(true) : setScrollHeader(false);

    const linksList = data.map(link => (
        <NavItem key={link.id}>
            <NavLink
                href={link.href}
                to={link.section}
                smooth={true}
                duration={50}
                spy={true}
                exact="true"
                offset={-50}
                activeClass="active-link"
                onClick={() => setShowMenu(false)}
            >
                {link.title}
            </NavLink>
        </NavItem>
    ));

    useEffect(() => {
        window.addEventListener("scroll", showScorllHeader);
    }, []);

    return (
        <MainHeader scrollHeader={scrollHeader}>
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
    );
};