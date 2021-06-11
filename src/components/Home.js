import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.jpeg'
import Title from './Title';
import Jokes from './Jokes';
import Navbar from './CustomNavbar';
class Home extends Component {
    state = { displayBio: false};
    
     toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return(
            <div>

            <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Srikanth</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects.</p>

                {
                    this.state.displayBio ? (
                <div>
                    <p>I live in Hyderabad</p>
                    <p>I love to code, I aslo love playing cricket.</p>
                    <button onClick={this.toggleDisplayBio}>Show less</button>
                </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default Home;
