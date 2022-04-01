import styled from "styled-components"
import {btnReset, v} from "../../styles/variables"
import {Link} from "react-router-dom";

export const SSidebar = styled.div`
width: ${v.sideBarWidth};
background: ${({theme}) => theme.bg};
height: 100vh;
padding: ${v.lgSpacing};
position: relative;
`;
export const SSidebarButton=styled.button`
${btnReset};
position: absolute;
top: ${v.xxlSpacing};
width: 32px;
height: 32px;
border-radius: 50%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
background: ${({theme})=>theme.bg};
right: ${({isOpen})=>isOpen ? "-16px" : "-40px"};
box-shadow: 0 0 4px ${({theme})=>theme.bg3};
transform:${({isOpen})=>(!isOpen ? `rotate(180deg)` : `initial`)};
`
export const SLogo = styled.div`
width: 52px;
img{
    max-width: 100%;
    height: auto;
}
margin-bottom: ${v.lgSpacing};
`;
export const SInput = styled.div`
background-color: ${({theme}) => theme.bgAlpha};
border-radius:${v.borderRadius};
border: 1px solid ${({theme}) => theme.bg3};
input{
padding: ${v.mdSpacing};
font-family: inherit;
letter-spacing: inherit;
font-size: 16px;
width: 100%;
outline: none;
border: none;
color: inherit;
background:transparent;
};
display: flex;
`
export const SSearchIcon = styled.button`
${btnReset};
padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
cursor:pointer;
svg{
font-size: 20px;
}
`
export const SDivider = styled.div`
height: 1px;
width: 100%;
background: ${({theme}) => theme.bg3};
margin: ${v.lgSpacing} 0;
`
export const SLinkContainer = styled.div`
background: transparent;
border-radius:${v.borderRadius};
margin: 8px 0;
:hover{
box-shadow: inset 0 0 0 1px ${({theme}) => theme.bg3};
};
`
export const SLink = styled.div`
display: flex;
align-items: center;
text-decoration: none;
color:inherit;
font-size: 16px;
padding: calc(${v.smSpacing} * 2px) 0;
svg{
font-size: 20px;
};
`;

export const SLinkIcon = styled.div`
display: flex;
padding: ${v.smSpacing} ${v.mdSpacing};
svg{
font-size: 20px;
}
`
export const SLinkLabel = styled.span`
display: block;
flex: 1;
margin-left: ${v.mdSpacing};
`
export const SLinkNotification = styled.div`
font-size: 14px;
padding: calc(${v.smSpacing} / 2) ${v.smSpacing} ;
border-radius: calc(${v.borderRadius} / 2);
background-color: ${({theme}) => theme.primary};
color: white;
margin: ${v.mdSpacing};
`

export const STheme=styled.div`
display: flex;
align-items: center;
font-size: 16px;
`
export const SThemeLabel=styled.span`
display: block;
flex: 1;

`
export const SThemeToggler=styled.button`
${btnReset};
margin: 0 auto;
width: 36px;
height: 20px;
background: ${({theme,isActive})=>(!isActive ?  theme.bg3 : theme.primary)};
cursor: pointer;
border-radius: 10px;
position: relative;
`
export const SToggleThumb=styled.div`
height: 18px;
width: 18px;
border-radius: 50%;
background: ${({theme,isActive})=>theme.bg};
position: absolute;
bottom: 1px;
right: calc(100% - 20px - 1px);
transition:right ease .2s ;
`