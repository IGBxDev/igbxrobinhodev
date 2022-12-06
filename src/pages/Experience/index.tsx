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
                            <li>
                                <S.TimeLineContent>
                                    <S.Date>20th may, 2010 </S.Date>
                                    <h1>Full stack developer</h1>
                                    <span>Trademaster</span>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla dolorem corrupti nesciunt molestias eligendi vitae ea dolore, 
                                        quis voluptatem, ullam suscipit, possimus impedit cupiditate aperiam. Ipsa in nulla veniam.
                                    </p>
                                </S.TimeLineContent>
                            </li>
                            <li>
                                <S.TimeLineContent>
                                    <S.Date>20th may, 2010 </S.Date>
                                    <h1>Heading 2</h1>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla dolorem corrupti nesciunt molestias eligendi vitae ea dolore, 
                                        quis voluptatem, ullam suscipit, possimus impedit cupiditate aperiam. Ipsa in nulla veniam.
                                    </p>
                                </S.TimeLineContent>
                            </li>
                            <li>
                                <S.TimeLineContent>
                                    <S.Date>20th may, 2010 </S.Date>
                                    <h1>Heading 3</h1>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla dolorem corrupti nesciunt molestias eligendi vitae ea dolore, 
                                        quis voluptatem, ullam suscipit, possimus impedit cupiditate aperiam. Ipsa in nulla veniam.
                                    </p>
                                </S.TimeLineContent>
                            </li>
                        </ul>
                    </S.TimeLine>
                </S.Container>                
            </S.Info> 
        </S.Experience>)
    }
}


export default Experience