import React from 'react'
import { Nav, NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink } from './NavbarElement'
import { FaBars } from 'react-icons/fa';

const Navbar = (props) => {
    console.log('mute')
    console.log(props.mute)
    console.log('muted wala')
    
    console.log(props.toggle_mute)
    return (
        <div>
            <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                   Amichroma
                </NavLogo>
                <MobileIcon onClick={props.toggle}>
                    <FaBars/>
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover"> Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"> Services </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="Singup"> Sign Up </NavLinks>
                    </NavItem>
                    
                </NavMenu>
                <NavBtn>
                <NavBtnLink to='sign in'>Sing in</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
            
            </Nav>
        </div>
    )
}

export default Navbar
