import React, { Component } from 'react'
import Axios from 'axios'
import {Link } from 'react-router-dom'
import { Container, Button} from 'react-bootstrap'

export class ShopPage extends Component {

    state = {
        post : {},
        isLoaded : false
    }
componentDidMount() {
    Axios.get(`http://nephtimes.com/wp-json/wp/v2/posts/${this.props.match.params.id}`)
    .then(res=> this.setState({
       post: res.data,
       isLoaded: true 
    }))
    .catch(err => console.log(err));
}



    render() {
        const { post, isLoaded} = this.state;
        const btnStyle = {
            color: 'white',
            textDecoration: 'none'
          };
        if(isLoaded){
            return (
                <Container>
                    <div>
                   <Button variant="info"><Link style={btnStyle} to="/CoverStories">Go back</Link> </Button>
                    <h3>{post.title.rendered}</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
                </div>
                </Container>
                
            )
        }
        return <h3>Loading..</h3>
    }
}

export default ShopPage
