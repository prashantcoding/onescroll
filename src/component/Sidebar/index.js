import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,SidebarWrapper,SidebarMenu,SidebarRoute } from './SidebarElements'
const Sidebar = (props) => {
    console.log(props.isOpen);
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon>
                <CloseIcon/></Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about">
                            About
                        </SidebarLink>
                        <SidebarLink to="discover">
                           Discover
                        </SidebarLink>
                        <SidebarLink to="Services">
                            Services
                        </SidebarLink>
                        <SidebarLink to="Sign Up">
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
