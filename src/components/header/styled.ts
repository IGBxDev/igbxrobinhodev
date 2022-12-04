import styled from "styled-components";


export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background-color: #1f1f1f;
`

export const Link = styled.a`
    text-decoration: none;
    margin: 0 10px;
    color: grey;
    text-transform: uppercase;
    
    :hover{
        color: white;
    }
`