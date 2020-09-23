import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='footerlogo_section'>
                <img className='footerlogo' src={window.whitelogoURL} />
                </div>

                <div>
                    <a href="https://github.com/AAfghahi/Hermes"><img className='github_logo' src={window.gitURL}/></a>
                    
                    <a href="https://www.linkedin.com/in/arash-afghahi-4aa05193/"><img className='linked_logo' src={window.linkedURL}/></a>
                </div>
                
            </div>
        );
    }
}

export default Footer;