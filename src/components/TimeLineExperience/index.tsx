import React, { useState } from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';


import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { IExperienceProps, ExperienceProps  } from '../../data/experience'

import './Timeline.css'


const TimeLineExperience = ({timeline}: IExperienceProps) => {

    const customizedMarker = (item: ExperienceProps) => {
        return (
            <span className="custom-marker shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: ExperienceProps) => {
        return (
            <Card header={item.company}>
                { item.image && <img src={item.image} onError={(e) => <img src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png' />} alt={item.name} width={200} className="shadow-1" />}
                <div><span >{item.date}</span></div>
                <div><span style={{fontWeight: "bold"}}>{item.jobTitle}</span></div>
                <p>{item.description}</p>
            </Card>
        );
    };


    return(
        <div className="timeline-demo">               
            <div className="card" >
                <Timeline 
                    value={timeline} 
                    align="alternate" 
                    className="customized-timeline" 
                    marker={customizedMarker} 
                    content={customizedContent} />
            </div>
        </div>
    )
}


export default TimeLineExperience