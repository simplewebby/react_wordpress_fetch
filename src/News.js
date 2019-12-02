import React, {Component} from 'react'
import Axios from 'axios'
import NewsDetail from './NewsDetail'
import {Spinner, Container}   from 'react-bootstrap';
class News extends Component {
    state = {
        posts: [],
        isLoaded: false
    }
    
    componentDidMount() {
      Axios.get('http://nephtimes.com/wp-json/wp/v2/posts?categories=4&per_page=5')
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
                <h1>News</h1>
                </div>
              {posts.map(post => (
              <NewsDetail key={post.id} post={post}/>
              
              ))}
              <hr/>
            </div>
            
            </Container>
            
          )

        }
        return <Spinner animation="border" variant="info" />
      }
      
}
    
    export default News;

