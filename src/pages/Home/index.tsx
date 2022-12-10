import React from 'react'
import Header from '../../components/header'
import About from '../About'
import Experience from '../Experience'
import Skill from '../Skill'
import Education from '../Education'

import * as S from './styled'

class Home extends React.Component{

    render(){
        return(<>
            <Header />
            <S.HomeContiner>
                <About />
                <Skill />
                <Experience />
                <Education />
            </S.HomeContiner>            
        </>)
    }
}

export default Home