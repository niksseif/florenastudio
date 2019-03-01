import React, { Component } from 'react';

import ContactMeLogo  from '../Components/ContactMeLogo'
import './contact.css'
class contact extends Component {
  render() {
   
    return (

      <div>
      
       <ContactMeLogo />
        <section className="Email"
        // style={{float:"right"}}
        >
        Email : fnemteanu@florenastudio.com
        </section>
        <section 
        className="Phone"
        >
        Phone: +14153502865
        </section>
      </div>


    );
  }
}

export default contact;
