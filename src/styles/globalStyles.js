import {createGlobalStyle} from "styled-components"
export const GlobalStyle=createGlobalStyle`
*,
*::after,
*::before{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
background: ${({theme})=>theme.bg2};
color: ${({theme})=>theme.text};
letter-spacing: 0.6px;
font-family: 'Roboto',sans-serif;
}
`