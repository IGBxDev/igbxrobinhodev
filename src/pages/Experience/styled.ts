import styled from "styled-components";

export const Experience = styled.div`
    min-height: 100vh;
   margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    width: 100%;
    max-width: 1234px;
`

export const Info = styled.div`
    width: 100%;
    height: auto;

    margin: 0 auto;

    background: rgb(17 24 39 / 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;

   
    @media only screen and (min-width: 768px) {
        ::before{
            content: '';
            position: absolute;
            height: 130%;
            width: 2px;
            left: 50%;
            transform: translateX(-50%);
            background-color: grey;
            
        }
        
        ul li{
            width: 50%;
            margin-bottom: 50px;
            position: relative;
        }

        ul li:nth-child(odd){
            float: left;
            clear: right;
            transform: translateX(-80px);
            border-radius: 10px 0 10px 10px;
        }

        ul li:nth-child(even){
            float: right;
            clear: left;
            transform: translateX(40px);
            border-radius: 0 10px 10px 10px;
        }

        ul li::after{
            content: '';
            position: absolute;
            height: 20px;
            width: 20px;
            background-color: grey;
            border-radius: 50%;
            top: 0;
        }

        ul li:nth-child(odd)::after{
            transform: translate(50%, -50%);
            right: -20px;

        }

        ul li:nth-child(even)::after{
            transform: translate(-50%, -50%);
            left: -21px;

        }

        ul li:hover::after{
            background-color: aqua;
        }
    }
`

export const TimeLine = styled.div`
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;

    ul{
        list-style: none;
    }

    ul li{
        padding: 20px;
        background-color: #1e1f22;
        color: white;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    ul li:last-child{
        margin-bottom: 0;
    }

`
export const TimeLineContent = styled.div`
    h1{
        font-size: 25px;
        font-weight: 500;
        line-height: 30px;
        margin-bottom: 10px;
    }

    p{
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }
`

export const Date = styled.h2`
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 2px;

    position: absolute;
    top: -40px;
`