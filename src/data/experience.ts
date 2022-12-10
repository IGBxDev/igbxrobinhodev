
export type ExperienceProps = {
    icon?: string 
    company?: string
    date: string
    jobTitle: string
    description: string 
    color?: string    
    image?: string   
    name?: string 
}

export interface IExperienceProps  {
    timeline:ExperienceProps[]
}

export const experienceData: ExperienceProps[] = [
    { color: '#9C27B0', company: "Trademaster", date: "Jul de 2022", jobTitle: "Back-end Developer NodeJs", description: "Uma solução que libera crédito e aumenta o prazo de pagamento do pequeno e médio varejo, por meio de uma plataforma que utiliza tecnologias como inteligência artificial e machine learning" },
    { color: '#673AB7', company: "Uffa", date: "Jan de 2022 - Jun de 2022", jobTitle: "Full-stack Developer", description: "Durante meu período na Uffa tive a oportunidade de conhecer melhor o mondo de finanças e boa parte do seu ecossistema, atuando como desenvolvedor Full Stack no time de sustentação, aplicando correções na ferramenta e melhorias de pequeno porte. Um grande desafio que tive durante esse período foi UI Designer, como nós era um time pequeno ainda não contávamos com um UI Designer sendo assim formos responsáveis por estar criando duas Landing Page Provi e Casas Bahia." },
    { color: '#FF9800', company: "MicroPower", date: "Out de 2021 - Jan de 2022", jobTitle: "Full-stack Developer", description: "Na MicroPower estive conhecendo um pouco do ecossistema E-Learning, atuando como desenvolvedor Full Stack com o time de sustentação. Acho que um grande desafio que tive aqui foi mexer no legado do Calendário totalmente desenvolvido em Javascript puro" },
    { color: '#607D8B', company: "Cervello", date: "Jan de 2020 - Set de 2021", jobTitle: "Analista de Desenvolvimento de Sistemas", description: "Devido as novas tecnologias estive atuando em conjunto com o cliente para entender os processo desenvolvidos no passado e com isso sugerir melhorias no processo atual que antes não era possível de serem implementadas no sistema atual da Cervello." },
    { color: '#9C27B0', company: "", date: "Jul de 2018 - Dez de 2019", jobTitle: "Desenvolvimento profissional", description: "O intercâmbio foi uma experiência que eu nunca vou esquecer, para mim não foi só aprender o inglês, foi um aprendizado para vida, foi conhecer novas culturas, foi sair da zona de conforto, foi fazer novas amizades, foi descobrir coisas que eu nunca pensei em descobrir, foi pensar em coisas que eu nunca iria pensar." },
    { color: '#FF9800', company: "Cervello", date: "Mar de 2011 - Jan de 2019", jobTitle: "Analista de Projetos", description: "O cargo de Analista de Sistemas é bem abrangente e cobre desde o estudo de processos em torno de processamento de dados de uma empresa, o levantamento e análise dos requisitos de sistema, o desenvolvimento e acompanhamento do sistema informatizado, a administração de banco de dados além do suporte técnico aos usuários do sistema." },
]

