import React, {Component} from 'react'
import Axios from 'axios'
import ColumnDetail from './ColumnDetail'
import {Spinner, Container} from 'react-bootstrap';
class Columns extends Component {
    state = {
        posts: [],
        isLoaded: false
    }
    
    componentDidMount() {
      Axios.get('http://nephtimes.com/wp-json/wp/v2/posts?categories=3&per_page=5')
      .then(res => this.setState({
        posts: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
      
    }
    
      render() {
        const { posts, isLoaded} = this.state;
        if(isLoaded) {
          return (
              <Container>
                  <div>
                  <div className="mainTitle">
                <h1>Columns</h1>
                </div>
                    {posts.map(post => (
                    <ColumnDetail key={post.id} post={post}/>
                    ))}
                    </div>
              </Container>
            
          )

        }
        return  <Spinner animation="border" variant="info" />
      }
      
}
    
    export default Columns;

