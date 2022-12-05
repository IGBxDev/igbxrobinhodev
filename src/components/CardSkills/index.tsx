
import { IconBaseProps } from 'react-icons/lib/esm/iconBase';

import * as S from './styled';

type CardProps = {
    icon: React.ReactElement<IconBaseProps>;
    title: string;
}

const CardSkill = (props: CardProps) =>{
    return(
        <S.CardSlill>
            <div>{props.icon}</div>
            <div>{props.title}</div>
        </S.CardSlill>
    )
}

export default CardSkill