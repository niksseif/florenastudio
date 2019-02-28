import React from 'react'
import { Segment, Image, Rail } from 'semantic-ui-react'

import src from '../project3.jpg'

const ProjectOneTextImage = () => (
        <Segment>
            <Image src={src} style={{ width: '800px', height: '500px' }} />

            <Rail attached internal style={{ width: '65%', marginLeft: '40%', marginTop: '15%', textAlign: 'left' }}>
                <Segment size="large" style={{ width: '90%', height: '30%' }}>
                    <h2>Project Showcase</h2>
                    <p>Please write about this project and what have you done for this more conceptually</p>
                </Segment>
            </Rail>
        </Segment>


    


)

export default ProjectOneTextImage