import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Montserrat';
    position: absolute;
    top: 20px;
    left: 30px;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Logo = styled.span`
    font-weight: 20px;
    font-weight: 700;
    margin-right: 10px;
`;

const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;

const NavigationListItem = styled.li`
    font-weight: 600;
    font-size: 15px;
    margin-left: 32px;
`;

const Navigation = () => (
    <NavigationWrapper>
        <Logo><Link to="/">PESTKA Studio</Link></Logo>
        <NavigationList>

            <NavigationListItem>
                <Link to="/articles">articles</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/about">about</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/gallery">gallery</Link>
            </NavigationListItem>
            <NavigationListItem>
                <Link to="/contact">contact</Link>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;