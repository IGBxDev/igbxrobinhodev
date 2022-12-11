import React from 'react'

import Title from '../../components/Title/index'
import TimeLineExperience from '../../components/TimeLineEducation'
import { educationData } from '../../data/education'

import * as S from './styled'

class Education extends React.Component{

    render(){
        return(
        <S.Experience id='education'>
            <Title title={'Educação'} />
            <TimeLineExperience timeline={educationData} />
        </S.Experience>)
    }
}


export default Education