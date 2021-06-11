import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';
// import SOCIAL_PROFILE from './data/socialProfiles';

const SocialProfile = props =>{
    const {link, image } = props.socialProfile;
    return(
            <span>
                <a href={link}><img src={image} alt='social-profile' style={{width: 35, height: 35, margin: 10}}/></a>
            </span>
        )
    }


const SocialProfiles = () =>(
    <div>
        <h2>Connect with Me!</h2>
        <div>
            {
                SOCIAL_PROFILES.map(ABCD => {
                    return <SocialProfile key={ABCD.id} socialProfile={ABCD} />;
                })
            }
        </div>
    </div>
)
    

export default SocialProfiles;
