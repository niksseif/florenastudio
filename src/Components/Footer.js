import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

import src from '../headerImage.png'

const Footer = () => {
    console.log(window.innerWidth,"<<<<<innerWidth")
    console.log(window.innerHeight, "<<<<<innerHeight")
    return (
        <Segment style={{ position: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor: 'lightgrey',}}>
            <li style={{ float: 'left'}}>About</li>
            
            <li style={{ float: 'left' }}>ContactUs</li>
           
            <li style={{ float: 'left' }}>Projects</li>
            
            <p style={{fontSize:'70%', float:'right'}}>Created with love Nik</p>
        {/* <Image src={src} style={{ width: '100%', height: '500px' }} attached internal position='right' /> */}
    </Segment>

    );
    }

export default Footer;