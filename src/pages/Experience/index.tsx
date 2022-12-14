import React from 'react'

import Title from '../../components/Title/index'
import TimeLineExperience from '../../components/TimeLineExperience'
import { experienceData } from '../../data/experience'

import * as S from './styled'

class Experience extends React.Component{

    render(){
        return(
        <S.Experience id='experience'>
            <Title title={'Experiência'} />
            <TimeLineExperience timeline={experienceData} />
        </S.Experience>)
    }
}


export default Experience