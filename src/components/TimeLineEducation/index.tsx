import React, { useState } from 'react'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';


import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { IEducationProps, EducationProps  } from '../../data/education'

import './Timeline.css'


const TimeLineEducation = ({timeline}: IEducationProps) => {

    const [event1, setEvent1] = useState([
        { jobTitle: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { jobTitle: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { jobTitle: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { jobTitle: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deseruntquisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" }
    ])

    const customizedMarker = (item: EducationProps) => {
        return (
            <span className="custom-marker shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: EducationProps) => {
        return (
            <Card title={item.jobTitle} subTitle={item.date}>
                { item.image && <img src={item.image} onError={(e) => <img src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png' />} alt={item.name} width={200} className="shadow-1" />}
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


export default TimeLineEducation