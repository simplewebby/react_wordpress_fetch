import React, {Component} from 'react'

import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Container, Button} from 'react-bootstrap'

export class ColumnDetail extends Component {
state= {
  imgUrl :'',
  author: '',
  isLoaded : false
}

    static propTypes = {
      post: PropTypes.object.isRequired
    }
 
    /* componentDidMount() {
      const { author} = this.props.post;
      //const getImageUrl = Axios.get(`http://nephtimes.com/wp-json/wp/v2/media/${image}`);
      //const getAuthor = Axios.get(`http://nephtimes.com/wp-json/wp/v2/users/${author}`);
     
      Promise.all([getImageUrl, getAuthor]).then(res => {
        this.props.setState({
            imgUrl: res[0].data.media_details.sizes.full.source_url,
            author: res[1].data.name,
            isLoaded : true
        })
      })
      
    }
     */

      render() {
        const { id,title, excerpt } = this.props.post;
        const { isLoaded} = this.state;
        const btnStyle = {
          color: 'white',
          textDecoration: 'none'
        };
        return (
          <Container>
            <div>
            <h3>{ title.rendered }</h3> 
            <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
           <Button variant="info"> <Link style={btnStyle} to={`/Columns/${id}`}>Read More</Link></Button>
           <hr />
          </div>
          </Container>
          
        )   
       
         
        
        return null
      }
      
}
 export default ColumnDetail;
    