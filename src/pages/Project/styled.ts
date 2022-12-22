import styled from 'styled-components'

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    height: auto;

    margin: 40px 0 40px 0;
    max-width: 1234px;

`

export const ProjectInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    align-content: center; 

    color: white;
`

export const List = styled.ul`
    list-style-type: none;
    display: flex;    
    align-items: center;
    justify-content: center;
    
    width: 900px;
    height: 30px;
`

export const ListItem = styled.li`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    width: 100px;
    height: 100%;

    :hover{
        cursor: pointer;
        color: #1890ff
    }
`