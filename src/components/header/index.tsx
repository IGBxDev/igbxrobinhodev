import React from "react";

import * as S from './styled'

class Header extends React.Component {
    
    render() {
        return (<S.Header>
            <S.Link href="http://">Sobre</S.Link>
            <S.Link href="http://">Skill</S.Link>
            <S.Link href="http://">Experiência</S.Link>
            <S.Link href="http://">Educação</S.Link>
            <S.Link href="http://">Projetos</S.Link>
            <S.Link href="http://">Contato</S.Link>
        </S.Header>)
    }
}

export default Header