import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;


  ul, ol {
    list-style:none;
  }
  
  .nav > li {
    float:left;
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    padding: .5rem;
  }
  
  .nav li a {
    color: white;
    text-decoration:none;
    padding:10px;
    display:block;
    cursor: pointer;
  }
  
  .nav li a:hover {
    color: rgb(161, 255, 180);
    cursor: pointer;
  }
  
  .nav li ul {
    display:none;
    position:absolute;
    min-width:70px;
  }
  
  .nav li:hover > ul {
    display:block;
  }
  
  .nav li ul li {
    position:relative;
    font-family: Montserrat Black Italic;
    color: #EF233C;
    text-transform: uppercase;
    z-index: 2;
  }

  a {
      text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 230px;
    padding-top: 3rem;
    transition: transform 0.3s ease-in-out;
    z-index: 19;

    li {
      color: white;
    }
  }
  @media (max-width: 768px) {
    li {
      padding: .5rem;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} id="menu">
      <ul className="nav">
				<li><Link to="/">HOME</Link></li>
        <li><a href="#Nosotros">QUIENES SOMOS</a></li>
        <li><a href="#Eleginos">CONTACTO</a></li>					
			</ul>
    </Ul>
  )
}

export default RightNav;