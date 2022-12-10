import React from 'react'

import Title from '../../components/Title/index'
import TimeLineExperience from '../../components/TimeLineExperience'
import { experienceData } from '../../data/experience'

import * as S from './styled'

class Education extends React.Component{

    render(){
        return(
        <S.Experience id='experience'>
            <Title title={'Educação'} />
            <TimeLineExperience timeline={experienceData} />
        </S.Experience>)
    }
}


export default Education