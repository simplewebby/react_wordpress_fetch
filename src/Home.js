import React from 'react';
import './App.css';
import News from './News';
import CoverStories from './CoverStories';
import Columns from './Columns';
import { Container, Row, Col} from 'react-bootstrap'


function Home() {
  return (
    
      <div className="Home">
          <Container>
            <Row>
                <Col xs><News /></Col>
                <Col xs={{ order: 12 }}>< Columns/></Col>
                <Col xs={{ order: 1 }}>< CoverStories/></Col>
            </Row>
            </Container>
    
        
      </div>
   
    
  );
}

export default Home;
