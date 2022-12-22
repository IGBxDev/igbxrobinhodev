import React from 'react'
import Title from '../../components/Title';
import CardSkill from '../../components/CardSkills';

import { skillsData } from '../../data/skill'

import * as S from './styled'

class Project extends React.Component{
    
    render(){
        return(
        <S.Project id='projects'>
            <Title title='Projetos' />

            <S.ProjectInfo>
                <S.List>
                    <S.ListItem>All</S.ListItem>
                    <S.ListItem>React.js</S.ListItem>
                    <S.ListItem>JavaScript</S.ListItem>
                    <S.ListItem>Node.js</S.ListItem>
                    <S.ListItem>Package</S.ListItem>
                    <S.ListItem>Bootstrap</S.ListItem>
                </S.List>
            </S.ProjectInfo>
        </S.Project>)
    }
}

export default Project