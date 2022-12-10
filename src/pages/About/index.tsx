import React from 'react'
import { FcBriefcase } from 'react-icons/fc'
import { BiMap } from 'react-icons/bi'
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
 import { GrMail } from 'react-icons/gr'

import * as S from './styled'

class About extends React.Component{
    
    private avatar: string;

    constructor(_avatar: string ){
        super(_avatar);
        this.avatar = "https://avatars.githubusercontent.com/igbxrobinho";
    }
    
    render(){
        return(<S.AboutInfo id='aboutinfo'>
                <S.Photo >
                    <img src={this.avatar} alt="avatar" />
                </S.Photo>
                <S.Title>Robson Rodrigues Ribeiro</S.Title>
                <S.JobTitle>
                    <FcBriefcase size={25} /> Full Stack Developer
                </S.JobTitle>
                <S.Location>
                    <BiMap size={25} /> Brasil, São Paulo
                </S.Location>
                <S.Info>
                    <p>Formado em Sistema da Informação aos 27 anos, apaixonado por tecnologia, venho buscando sempre novos aprendizados.</p>
                    <p>Nos últimos anos venho aprimorando minhas habilidades com javascript, tanto no frontend como no backend, sendo apto a 
                        desenvolver em javascript e seu ecossistema, ou seja, NodeJs, ReactJs, Typescript, ElectronJs e MongoDB.
                    </p>
                    <p>Parte da minha carreira foi exercendo o cargo de Analista de Projetos na Cervello, integrando uma equipe multidisciplinar 
                        fazendo uso de metodologias ágeis em um ambiente totalmente colaborativo, assim como desenvolvedor Full-Stack na MicroPower, 
                        uma plataforma T&D para gestão de Treinamento(LMS) e Gestão do Desempenho(TMS), com funcionalidade aderentes às melhores 
                        práticas de gamificação, metodologias, tendências globais.
                    </p>
                </S.Info>
                <S.Contact>
                    <button>Contato</button>
                </S.Contact>                
                <S.Network>
                    <BsGithub size={25} />
                    <BsLinkedin size={25} />
                    <BsTwitter size={25} />
                    <BsInstagram size={25} />
                    <BsFacebook size={25} />
                    <GrMail size={25} />
                </S.Network>
        </S.AboutInfo>)
    }
}

export default About