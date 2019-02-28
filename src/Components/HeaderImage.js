import React,{Component} from 'react'
import { Image, Icon, Segment, Modal, List } from 'semantic-ui-react'
// import HeaderImage from'../project1.jpg'
import { Link } from 'react-router-dom'
import ProjectOneTextImage from '../Components/ProjectOneTextImage'
import Logo from '../Components/Logo'
// import '../Logo.css'

class ImageHeading extends Component  {
    state = {
        isOpen:false,
        isHovering: false,
    }

    toggle = ()  => {
        this.setState({
            isOpen: !this.state.isOpen,
        }) 
    }
  
  redirect=() =>{
      window.location = '/contactme'
  }
        
    render(){
       
            return(
                <div style={{position:'relative'}} >
                  
                    <Logo/>
                    
                    <Modal trigger={<Icon 
                        style={{
                            position: 'absolute',
                            top: '2%',
                            left: '90%',
                            cursor:'pointer',
                            color:'white'
                        }}
                        name="align center"
                        size="big"
                        // circular
                        onClick={this.toggle}
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseHover}
                    />}
                    >
                    
                            <Modal.Content style={{backgroundColor:'black'}}>
                            <List link  style={{backgroundColor:'black'}}>
                                
                                <List.Item href='/projects'style={{color:'white',fontSize:'40px'}} active >
                                <List.Icon  name='angle right' size='small' style={{ color: 'white' }}/>
                                Projects</List.Item>
                                <List.Item href='/workplace-strategy' style={{ color: 'white', fontSize: '40px' }} active>
                                <List.Icon name='angle right' size='small' style={{ color: 'white' }} />
                                Workplace strategy</List.Item>
                                <List.Item href='/about' style={{ color: 'white', fontSize: '40px' }} active>
                                <List.Icon name='angle right' size='small' style={{ color: 'white' }} />
                                About</List.Item>
                                <List.Item
                                as={Link} to='/contactme'
                                style={{ color: 'white', fontSize: '40px', display: 'flex' }} 
                                active 
                                
                                
                                >
                               
                                <List.Icon 
                                name='angle right' 
                                size='small' 
                                style={{ color: 'white' }} 
                                />
                                Contact
                             
                                </List.Item>
                                
                            </List>
                        </Modal.Content>
    
                    </Modal>
                </div>
                
            );
            
    }
}

const styles = {
    image:{
        backgroundSize:'cover',
        width:'100%',
        opacity: '0.8',
        zIndex:'-1',
        height:'10%',
        filter: 'alpha(opacity=50)',
    },
    
}
export default ImageHeading;

