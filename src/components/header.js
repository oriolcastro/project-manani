import React from 'react'

import { Container, Image } from 'semantic-ui-react'
import logo from '../images/logo.png'

const Header = () => (
  <Container
    textAlign="center"
    style={{ padding: '24px', backgroundColor: 'transparent' }}
  >
    <Image src={logo} size="small" centered verticalAlign="middle" />
  </Container>
)

export default Header
