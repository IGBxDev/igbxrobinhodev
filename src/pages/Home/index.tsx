import React from 'react'
import Header from '../../components/header'
import About from '../About'

import * as S from './styled'

class Home extends React.Component{

    render(){
        return(<>
            <Header />
            <S.HomeContiner>
                <About />
            </S.HomeContiner>            
        </>)
    }
}

export default Home