import React, { useState } from 'react'
import styled from 'styled-components'
import logoSvg from './logo.svg'
import menuIcon from './menuicon.png'


function Header() {
  const [buregerStatus, setBurgerStatus] = useState(false)

  const showBurgerMenu = () => setBurgerStatus(true)

  const hideBurgerMenu = () => setBurgerStatus(false)


  return (
    <Container>
      <a>
        <img src={logoSvg} />
      </a>
      <Menu>
        <AStyle href='#'>MODEL S</AStyle>
        <AStyle href='#'>MODEL 3</AStyle>
        <AStyle href='#'>MODEL X</AStyle>
        <AStyle href='#'>MODEL Y</AStyle>
        <AStyle href='#'>SOLAR ROOF</AStyle>
        <AStyle href='#'>SOLAR PANELS</AStyle>
      </Menu>
      <RightMenu>
        <AStyle href='#'>Shop</AStyle>
        <AStyle href='#'>Tesla Account</AStyle>
        <CustomMenu onClick={showBurgerMenu}>
          <img src={menuIcon} />
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={buregerStatus}>
        <CloseWrapper>
          <CustomClose onClick={hideBurgerMenu}>
            <img src={menuIcon} />
          </CustomClose>
        </CloseWrapper>
        <li><a href='#'>EISTING INVENTORY</a></li>
        <li><a href='#'>USED INVENTORY</a></li>
        <li><a href='#'>TRADE-IN</a></li>
        <li><a href='#'>CYBERTRUCK</a></li>
        <li><a href='#'>ROADSTER</a></li>
        <li><a href='#'>SEMI</a></li>
        <li><a href='#'>CHARGING</a></li>
        <li><a href='#'>POWERWALL</a></li>
        <li><a href='#'>COMERSIAL ENERGY</a></li>
        <li><a href='#'>UTILIES</a></li>
        <li><a href='#'>TEST DRIVE</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 20px;
  top:0;
  left:0;
  right:0;
  z-index: 16;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
    @media(max-width: 768px) {
      display: none;
    }
`
const AStyle = styled.a`
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
`
const CustomMenu = styled.div`
  cursor:pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.1s ease-in-ease-out;
    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
        a {
          font-weight: 600;
        }
    }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const CustomClose = styled.div`
   cursor:pointer;
`