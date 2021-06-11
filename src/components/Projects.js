import React from 'react';
import PROJECTS from '../data/projects';

const Project =( props) =>{
    
    const { title, image, description, link } = props.project;
    return(
        <div style={{ display: 'inline-block', width: 300, margin: 10}}>
             <h3>{title}</h3>
             <img src={image} alt='Profile' style={{ width: 200, height: 120}}/>
             <p>{description}</p>
             <a href={link}>Know More</a>

        </div>
        
        )
    }


const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(ABCD => (
                    <Project key={ABCD.id} project={ABCD} />
                    ))
            }
        </div>
    </div>
 )
    


export default Projects;