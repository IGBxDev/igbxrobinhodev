import React from 'react'

import Title from '../../components/Title/index'
import TimeLineEducation from '../../components/TimeLineEducation'
import { educationData } from '../../data/education'

import * as S from './styled'

class Education extends React.Component{

    render(){
        return(
        <S.Experience id='education'>
            <Title title={'Educação'} />
            <TimeLineEducation timeline={educationData} />
        </S.Experience>)
    }
}


export default Education