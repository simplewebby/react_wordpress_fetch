import React from 'react';
import './App.css';
import {Navbar, Nav}   from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Navigation() {
  const listStyle = {
    color: 'black',
    fontSize: '18px',
    textDecoration: 'none',
    paddingRight: '5px',
    marginRight: '40px'
    
  };

  const nav = {
    maxWidth: '1200px',
    margin: '0 auto'
  };
  
  return (
<div> 
<div style={nav} className="navLinks">
        <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
          
          <Navbar.Brand href="/"> <img src="/Neph.png" alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Link  to="/"><Nav style={listStyle}>Home</Nav></Link> 
                <Link  to="News"><Nav style={listStyle}>News</Nav></Link>
                <Link  to="CoverStories"><Nav style={listStyle}>Cover Stories</Nav></Link>
                <Link  to="/Columns"><Nav style={listStyle}>Columns</Nav></Link> 
            </Navbar.Collapse>
       
           
            </Navbar> 
            </div>  
        </div>



    
  );
}

export default Navigation;

// export const getColunm = `${appUrl}posts?categories=3&per_page=5`;
// export const getNew = `${appUrl}posts?categories=4&per_page=5`;
// export const getCover = `${appUrl}posts?categories=15&per_page=5`;