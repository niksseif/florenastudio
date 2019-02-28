
import React, { Component } from 'react';
import ImageHeading from '../Components/HeaderImage';

import '../Logo.css';

class LandingPage extends Component {
  componentDidMount() {
    document.title = 'Florena studio';
  }
  render() {
    return (

      <div className="App">

        <ImageHeading />

        <section className="UnderConstruction">Under Construction...</section>
      </div>
    );
  }
}

export default LandingPage;
