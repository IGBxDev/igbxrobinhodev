import { FaNodeJs } from 'react-icons/fa'
import { 
    SiReact, 
    SiMysql, 
    SiPostgresql, 
    SiDocker, 
    SiElectron,
     SiJavascript,
     SiTypescript,
     SiCss3,
     SiMongodb,
     SiMicrosoftsqlserver
} 
from 'react-icons/si'

import { IconBaseProps } from 'react-icons/lib/esm/iconBase';
import { IconType } from '../../node_modules/react-icons/lib'

type SkillProps = {
    icon: IconType //React.ReactElement<IconBaseProps>
    title: string
}

interface SkillData {
    skill: SkillProps[]
}


export const skillsData: SkillProps[] = [
    { title: "Node.Js", icon:  FaNodeJs  },
    { title: "Javascript", icon:  SiJavascript },
    { title: "Electron.Js", icon: SiElectron },
    { title: "Mysql.Js", icon: SiMysql },
    { title: "Postgresql", icon: SiPostgresql },
    { title: "Docker", icon: SiDocker },
    { title: "React", icon: SiReact },
    { title: "Typescript", icon: SiTypescript },
    { title: "CSS3", icon: SiCss3 },
    { title: "Mongodb", icon: SiMongodb },
    { title: "SQL Server", icon: SiMicrosoftsqlserver}
]