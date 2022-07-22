import React from 'react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styled';
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../Routes/Coordinator';

function Header() {

  const history = useNavigate()

  return (
    <HeaderContainer>
      <img src={logo} alt='Logo do site TMDB'
        onClick={()=> goToHomePage(history)}
      />
    </HeaderContainer>
  );
}

export default Header;