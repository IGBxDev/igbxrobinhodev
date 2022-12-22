
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
    { image: "https://www.trademaster.com.br/wp-content/uploads/2022/08/branco.png", color: '#9C27B0', company: "", date: "Jul de 2022", jobTitle: "Back-end Developer NodeJs", description: "Uma solução que libera crédito e aumenta o prazo de pagamento do pequeno e médio varejo, por meio de uma plataforma que utiliza tecnologias como inteligência artificial e machine learning" },
    { image: "https://www.uffa.com.vc/static/media/logouffa-home.003527e7.svg", color: '#673AB7', company: "", date: "Jan de 2022 - Jun de 2022", jobTitle: "Full-stack Developer", description: "Durante meu período na Uffa tive a oportunidade de conhecer melhor o mondo de finanças e boa parte do seu ecossistema, atuando como desenvolvedor Full Stack no time de sustentação, aplicando correções na ferramenta e melhorias de pequeno porte. Um grande desafio que tive durante esse período foi UI Designer, como nós era um time pequeno ainda não contávamos com um UI Designer sendo assim formos responsáveis por estar criando duas Landing Page Provi e Casas Bahia." },
    { image: "https://micropowerglobal.com/wp-content/uploads/2022/01/MicroPower-Global-28-anos.png", color: '#FF9800', company: "", date: "Out de 2021 - Jan de 2022", jobTitle: "Full-stack Developer", description: "Na MicroPower estive conhecendo um pouco do ecossistema E-Learning, atuando como desenvolvedor Full Stack com o time de sustentação. Acho que um grande desafio que tive aqui foi mexer no legado do Calendário totalmente desenvolvido em Javascript puro" },
    { image: "https://cervello.com.br/wp-content/themes/cervello2020/img/logo.svg", color: '#607D8B', company: "", date: "Jan de 2020 - Set de 2021", jobTitle: "Analista de Desenvolvimento de Sistemas", description: "Devido as novas tecnologias estive atuando em conjunto com o cliente para entender os processo desenvolvidos no passado e com isso sugerir melhorias no processo atual que antes não era possível de serem implementadas no sistema atual da Cervello." },
    { color: '#9C27B0', company: "", date: "Jul de 2018 - Dez de 2019", jobTitle: "Desenvolvimento profissional", description: "Neste período realizei um intercâmbio onde pude estar aprendendo um pouco da cultura de Cork e Dublin na Irlanda, onde estudei Inglês e também trabalhei como deliveroo fazendo entregas de comida por toda a cidade de Cork e Dublin eu também consegui um trabalho em uma lavanderia quando eu morava em Cork. Esta experiência de viver em outro país me proporcionou além do desenvolvimento do Inglês grande desenvolvimento pessoal. Conviver com diferentes culturas e sair da minha zona de conforto me trouxe uma visão diferente do mundo e de mim mesmo, onde aprendi habilidades que eu nunca pensei que poderia ter." },
    { image: "https://cervello.com.br/wp-content/themes/cervello2020/img/logo.svg", color: '#FF9800', company: "", date: "Mar de 2011 - Jan de 2019", jobTitle: "Analista de Projetos", description: "O cargo de Analista de Sistemas é bem abrangente e cobre desde o estudo de processos em torno de processamento de dados de uma empresa, o levantamento e análise dos requisitos de sistema, o desenvolvimento e acompanhamento do sistema informatizado, a administração de banco de dados além do suporte técnico aos usuários do sistema." },
]

