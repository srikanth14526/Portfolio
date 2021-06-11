import React, { Component } from 'react';
import { Navbar, Nav, NavLink} from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './CustomeNavbar.css';
import { getActiveLink } from 'react-scroll/modules/mixins/scroller';
import * as ReactBootStrap from "react-bootstrap"
// import { Link} from 'react-scroll';



const CustomNavbar = () => {
   
        return(
        <div>
           
            <Navbar  bg="light"  expand="lg" fixed="top" className="abcd">
                <Navbar.Brand style={{marginLeft:15}}>
                    <Link to='/'>Portfolio</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                        <Link to='/'>
                            <Nav.Link  href="#" >Home</Nav.Link>
                        </Link>
                        <Link to='/contacts'>
                            <Nav.Link href="#contact">Technologies</Nav.Link>
                        </Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/jokes">Jokes</Nav.Link>
                        
                        
                    </Nav>
                    <Nav pullRight className="ml-auto" >

                        <Nav.Link href="/about" className="main-nav" >About</Nav.Link>
                        <NavLink href="/title" className="main-nav" >Title</NavLink>
                        <NavLink href="/contact" className="main-nav" activeClassName="main-nav-active">Contact</NavLink>
                    
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
  
        </div>

        
        )
    }

export default CustomNavbar;