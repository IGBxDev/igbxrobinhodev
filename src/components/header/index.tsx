import React from "react";

import * as S from './styled'

class Header extends React.Component {
    
    render() {
        return (<S.Header>
            <S.Link href="#">Sobre</S.Link>
            <S.Link href="#skills">Skills</S.Link>
            <S.Link href="#experience">Experiência</S.Link>
            <S.Link href="#education">Educação</S.Link>
            <S.Link href="#project">Projetos</S.Link>
            <S.Link href="#contact">Contato</S.Link>
        </S.Header>)
    }
}

export default Header