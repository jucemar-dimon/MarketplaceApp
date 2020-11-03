import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';
import Logo from '../../assets/images/logo.png';

const Header = () => (
  <Container>
    <Image source={Logo} />
  </Container>
);

export default Header;
