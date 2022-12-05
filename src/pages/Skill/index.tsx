import React from 'react'
import Title from '../../components/Title';
import CardSkill from '../../components/CardSkills';

import { skillsData } from '../../data/skill'

import * as S from './styled'

class Skill extends React.Component{
    
    render(){
        return(
        <S.Skills>
            <Title title='Skills' />

            <S.SkillInfo>
                {skillsData.map( item => {
                    return(<CardSkill 
                        icon={<item.icon size={item.size} color={item.color} />}  
                        title={item.title}
                    />)
                })}
            </S.SkillInfo>


        </S.Skills>)
    }
}

export default Skill