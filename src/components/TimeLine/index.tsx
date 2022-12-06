import React from 'react'


import * as S from './styled'

type TimelineProps ={
    date: string,
    jobTitle: string,
    description: string
    company: string
}

const TimeLine = (props: TimelineProps) => {
    return(
        <S.Info>
            <S.Container>
                <S.TimeLine>
                    <ul>
                        <li>
                            <S.TimeLineContent>
                                <S.Date>{props.date}</S.Date>
                                <h1>{props.jobTitle}</h1>
                                <span>{props.company}</span>                                
                                <p>{props.description}</p>
                            </S.TimeLineContent>
                        </li>            
                    </ul>
                </S.TimeLine>
            </S.Container>
        </S.Info>
    )
}


export default TimeLine