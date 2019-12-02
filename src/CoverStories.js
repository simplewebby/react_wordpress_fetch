import React, {Component} from 'react'
import Axios from 'axios'
import ItemDetail from './ItemDetail'
import {Spinner, Container}   from 'react-bootstrap';
class CoverStories extends Component {
    state = {
        posts: [],
        isLoaded: false
    }
    
    componentDidMount() {
      Axios.get('http://nephtimes.com/wp-json/wp/v2/posts?categories=15&per_page=5')
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
                <h1>Cover Stories</h1>
                </div>
              {posts.map(post => (
                <ItemDetail key={post.id} post={post}/>
              ))}
            </div>
            </Container>
            
          )

        }
        return  <Spinner animation="border" variant="info" />
      }
      
}
    
    export default CoverStories;
