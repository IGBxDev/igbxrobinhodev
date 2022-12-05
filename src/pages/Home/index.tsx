import React from 'react'
import Header from '../../components/header'
import About from '../About'
import Skill from '../Skill'

import * as S from './styled'

class Home extends React.Component{

    render(){
        return(<>
            <Header />
            <S.HomeContiner>
                <About />
                <Skill />
            </S.HomeContiner>            
        </>)
    }
}

export default Home