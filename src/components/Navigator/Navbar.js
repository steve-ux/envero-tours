import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import LogoEnvero from "../../assets/envero-tours-logo-white.png";

const Nav = styled.nav`
  height: 16vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #001220;
  font-weight: bold;
  z-index: 20;

  .logo {
    padding: 0.5px 10px;
    background-color: #001220;
  }
  img {    
    width: 10vw;
    padding: 1px;
  }
  .logo {
    width: 10vw;
    padding: 12px;
  }
  @media (max-width: 1025px) {
    .logo {
      width: 12vw;
    }
  }
  @media (max-width: 769px) {
    img {    
      width: 18vw;
      padding: 1px;
    }
  }
  @media (max-width: 520px) {
    .logo {
      width: 18vw;
      margin-top: 1rem 
    }
  }
  @media (max-width: 425px) {
    
    img {    
      width: 22vw;
      padding: 1px;
    }
  }
    
    @media (max-width: 320px) {
      img {
        width: 24vw;
      }
    }


  }
`;

const Navbar = () => {
  return (
    <Nav className="navigator">
      <div className="logo">
        <img src={LogoEnvero} alt="Logo de Envero Tours"/>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
