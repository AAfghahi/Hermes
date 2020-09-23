import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <section className='footerlogo_section'>
                <img className='footerlogo' src={window.whitelogoURL} />
                </section>
                
            </div>
        );
    }
}

export default Footer;