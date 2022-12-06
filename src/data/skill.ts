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
     SiMicrosoftsqlserver,
     SiGithub,
     SiJquery
} 
from 'react-icons/si'

import { IconType } from '../../node_modules/react-icons/lib'

type SkillProps = {
    icon: IconType
    title: string
    size: number
    color: string
}


export const skillsData: SkillProps[] = [
    { title: "Node.Js", icon:  FaNodeJs, size: 64, color: "#5C9553"   },
    { title: "Javascript", icon:  SiJavascript, size: 64, color: "#FFCC1B"  },
    { title: "Electron.Js", icon: SiElectron, size: 64, color: "#31B2FB"  },
    { title: "Mysql.Js", icon: SiMysql, size: 64, color: "#4479A1"  },
    { title: "Postgresql", icon: SiPostgresql, size: 64, color: "#177ddc"  },
    { title: "Docker", icon: SiDocker, size: 64, color: "#2496ED"  },
    { title: "React", icon: SiReact, size: 64, color: "#177ddc"  },
    { title: "Typescript", icon: SiTypescript, size: 64, color: "#177ddc"  },
    { title: "CSS3", icon: SiCss3, size: 64, color: "#2862E9"  },
    { title: "Mongodb", icon: SiMongodb, size: 64, color: "#3FA037"  },
    { title: "SQL Server", icon: SiMicrosoftsqlserver, size: 64, color: "#177ddc" },
    { title: "Github", icon: SiGithub, size: 64, color: "#F44D27" },
    { title: "JQuery", icon: SiJquery, size: 64, color: "#0769AD" },
]