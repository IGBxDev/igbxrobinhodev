import * as S from './styled'

type TitleProps = {
    title: string
}

const Title = ({title}: TitleProps ) => {
    return(<S.Title><span>{title}</span></S.Title>)
}

export default Title
