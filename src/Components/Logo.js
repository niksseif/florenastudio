import React, { Component } from 'react';

import Logo2 from '../Asset 3.png';
import Logo3 from '../Asset 4.png';

import styled from 'react-emotion';

import '../Logo.css'


class Logo extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.state ={
            x:0,
            y:0
        }
    }
    onMouseMove = (e) => {
        const width = this.refs.container.clientWidth-100;
        const height = this.refs.container.clientHeight-100
        const oX = (e.nativeEvent.offsetX/width)* 100;
        const oY = (e.nativeEvent.offsetY / height) * 100;
        console.log (oX,oY)
        this.setState({ 
            x:oX,
            y:oY
        })
    }
    onMouseOut = () => {
        this.setState({
            x:0,
            y:0
        })
    }
  render() {
      const {x, y} = this.state
      const maskStyle={
          '--maskX':x,
          '--maskY':y
      }
    return (
       

        <div
        className='container'
        ref='container'
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseOut}
        style={maskStyle}
        >
            <section
                className='backGroundSection'
            >
            <img src={Logo3} className = 'whiteLogo'/>
            </section>
            <section
                className= 'topSec'
            >
            <img src={Logo2} className = 'blackLogo'/>
            </section>
            <section>
                <span className='logoFont'>FLORENA <b>NEMTEANU</b> studio.</span>
            </section>
           
      </div>
      
        
        
    );
  }
}

export default Logo;
