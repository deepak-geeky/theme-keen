import React from 'react'
import Link from 'next/link'
import HoverButton from '../../atoms/Buttons/hoverButton'
import './nav.css'
import HoverMenu from '../../atoms/Menu/hoverMenu'
import  {Row,Col} from 'reactstrap'
import NavTopLeft from '../../Molecules/navBar/navTopLeft'
import NavTopRight from '../../Molecules/navBar/navTopRight'

const Nav = () => (
  <nav className='nav-container'>
    <Row>
        <Col> <NavTopLeft /> </Col>
        <Col> <NavTopRight /> </Col>
    </Row>
    <hr/>
    <Row>
        <Col></Col>
        <Col></Col>
    </Row>
  </nav>
)

export default Nav
