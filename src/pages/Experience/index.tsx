import React from 'react'

import Title from '../../components/Title/index'
import TimeLine from '../../components/TimeLine'
import { experienceData } from '../../data/experience'

import * as S from './styled'

class Experience extends React.Component{

    render(){
        return(
        <S.Experience>
            <Title title={'Experiência'} />

            {/* {experienceData.map((item, index) =>{
                return(
                    <TimeLine key={index}
                        date={item.date}
                        jobTitle={item.jobTitle}
                        company={item.company}
                        description={item.description}
                    />
                )
            })} */}

             <S.Info>
                <S.Container>
                    <S.TimeLine>
                        <ul>
                            {experienceData.map((item, index) =>{
                                return(
                                <li key={index}>
                                    <S.TimeLineContent>
                                        <S.Date>{item.date}</S.Date>
                                        <h1>{item.jobTitle}</h1>
                                        <span>{item.company}</span>
                                        <p>{item.description}</p>
                                    </S.TimeLineContent>
                                </li>
                                )
                            })}
                        </ul>
                    </S.TimeLine>
                </S.Container>                
            </S.Info> 
        </S.Experience>)
    }
}


export default Experience