
export type EducationProps = {
    icon?: string 
    company?: string
    date: string
    jobTitle: string
    description: string 
    color?: string    
    image?: string   
    name?: string 
}

export interface IEducationProps  {
    timeline:EducationProps[]
}

export const educationData: EducationProps[] = [
    { image:"https://sumare.edu.br/resources/assets/img/logo-sumare.svg", color: '#9C27B0', company: "", date: "Jul de 2022", jobTitle: "Faculdade Sumaré", description: "Bacharel em Sistemas de Informação" },
    { image: "https://www.kasolution.com.br/Content/themes/Ka/Imagens/lg_Ka_original.png", color: '#673AB7', company: "", date: "Jan de 2022 - Jun de 2022", jobTitle: "Ka Solution", description: "Curso 20483 - Programando em C# com Visual Studio" },
    { image: "https://www.kasolution.com.br/Content/themes/Ka/Imagens/lg_Ka_original.png", color: '#FF9800', company: "", date: "Out de 2021 - Jan de 2022", jobTitle: "Ka Solution", description: "10778 Implementação de modelos de dados e relatórios com o Microsoft SQL Server 2012" },
    { image: "https://www.kasolution.com.br/Content/themes/Ka/Imagens/lg_Ka_original.png", color: '#607D8B', company: "", date: "Jan de 2020 - Set de 2021", jobTitle: "Ka Solution", description: "10774 Querying Microsoft SQL Server 2012" },
    { image: "https://www.kasolution.com.br/Content/themes/Ka/Imagens/lg_Ka_original.png", color: '#9C27B0', company: "", date: "Jul de 2018 - Dez de 2019", jobTitle: "Ka Solution", description: "10777 - Implementing a Data Warehouse with Microsoft SQL Server 2012" },
    { image: "https://www.kasolution.com.br/Content/themes/Ka/Imagens/lg_Ka_original.png", color: '#FF9800', company: "", date: "Mar de 2011 - Jan de 2019", jobTitle: "Ka Solution", description: "10775 - Administrando Bancos de Dados Microsoft SQL Server 2012" },
]

