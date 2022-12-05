import styled from 'styled-components'
import perfil from '../../assets/perfil.jpeg'

export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 80px;

    height: auto;

    border-radius: 10px;

    margin-left: 40px;
    margin-right: 40px;

    padding: 48px;

    color: white;

    background:  rgb(17 24 39 / 1);
`;

export const Photo = styled.div`
    width: 100%;
    height: 180px;
    display: flex;

    justify-content: center;

    position: absolute;
    top: 70px;

    img{
        width: 180px;
        height: 100%;

        border-style: solid;
        border-color: #1890ff;
        border-width: 4px;


        border-radius: 9999px;
    }
`;

export const Title = styled.span`
    margin-top: 100px;
    color: white;
    text-transform: uppercase;
`

export const JobTitle = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    align-items: center;

    svg{
        padding: 0 10px 0 0;
    }

`

export const Location = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    svg{
        padding: 0 10px 0 0;
    }
`

export const Info = styled.div`
    white-space: normal;
`

export const Contact = styled.div`
    width: 100%;
    display: flex;
    margin: 10px 0;

    button{
        width: 100px;
        height: 40px;

        border-radius: 25px;

        color: #fff;
        border: none;
        background: #177ddc;

        font-size: 16px;
 

        cursor: pointer;

        :hover{
            background: #165996;
        }
    }
`

export const Network = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    margin: 20px 0;

    svg{
        color: #177ddc;
        cursor: pointer;

        :hover{
            color: #165996;
        }
    }
`