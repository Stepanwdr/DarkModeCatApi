import React, {useContext, useState} from 'react';
import {
    SDivider,
    SInput,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearchIcon,
    SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb
} from "./styles";
import {logoPng} from "../../assets";
import {AiOutlineApartment, AiOutlineHome, AiOutlineLeft, AiOutlineSearch, AiOutlineSetting} from "react-icons/ai";
import {MdLogout, MdOutlineAnalytics} from "react-icons/md";
import {BsPeople} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../../App";

const Sidebar = () => {
    const navigateTo = useNavigate()
    const {setTheme,theme}=useContext(ThemeContext)
    const [sideBarIsOpen,setSideBarIsOpen]=useState(false)
    return (
        <SSidebar isOpen={sideBarIsOpen}>
            <>
            <SSidebarButton isOpen={sideBarIsOpen} onClick={()=>setSideBarIsOpen(!sideBarIsOpen)}><AiOutlineLeft/></SSidebarButton>
            </>
            <SLogo>
                <img src={logoPng} alt={"logo"}/>
            </SLogo>
            <SInput>
                <SSearchIcon>
                    <AiOutlineSearch/>
                </SSearchIcon>
                <input type="text" placeholder={"Search"}/>
            </SInput>
            <SDivider/>
            {
                linksArray.map(({to,link,icon,label,notification}) => (
            <SLinkContainer key={to}>
                        <SLink navigateTo={link}>
                            <SLinkIcon>{icon}</SLinkIcon>
                            <SLinkLabel>{label}</SLinkLabel>
                            {!!notification && <SLinkNotification>
                                {notification}
                            </SLinkNotification>}
                        </SLink>
            </SLinkContainer>
                ))
            }
                  <SDivider/>
            {secondaryLinksArray.map(({to,link,icon,label,notification})=>(
                <SLinkContainer key={to}>
                <SLink navigateTo={link}>
                <SLinkIcon>{icon}</SLinkIcon>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && <SLinkNotification>
                    {notification}
                </SLinkNotification>
                }
                </SLink>
                </SLinkContainer>
                ))}
                <SDivider/>
                <STheme>
                    <SThemeLabel>
Dark mode
                    </SThemeLabel>
                    <SThemeToggler isActive={theme==="dark"} onClick={()=>setTheme((p)=>p==="light" ? "dark" : "light")}>
                        <SToggleThumb style={theme==="dark" ? {right:"1px"} : {}}/>

                    </SThemeToggler>
                </STheme>
        </SSidebar>
    );
};
const linksArray = [{
    label: "Home",
    icon: <AiOutlineHome/>,
    to: "/",
    notification: 0
},
    {
        label: "Statistics",
        icon: <MdOutlineAnalytics/>,
        to: "/statistics",
        notification: 4
    },
    {
        label: "Costumers",
        icon: <BsPeople/>,
        to: "/costumers",
        notification: 2
    },
    {
        label: "Diagrams",
        icon: <AiOutlineApartment/>,
        to: "/diagrams",
        notification: 0
    },

]
const secondaryLinksArray = [{
    label: "Settings",
    icon: <AiOutlineSetting/>,
    to: "/",
    notification: 0
},
    {
        label: "Logout",
        icon: <MdLogout/>,
        to: "/",
        notification: 0
    },
]
export default Sidebar;