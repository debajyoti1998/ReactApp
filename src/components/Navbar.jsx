import React,{useState} from 'react';
import styled ,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { MenuData } from '../data/MenuData';
import {Button} from './Button';
import {HiMenuAlt3} from 'react-icons/hi'
import {FaBars,FaTimes} from 'react-icons/fa';

const Nav = styled.nav`
height:60px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background:red;
`;
const NavLink=css`
color:#fff;
display:flex;
align-item:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;

`;
const Logo =styled(Link)`
${NavLink}
font-style:italic;
display:flex;
align-items:center;
`;
const MenuBars=styled(HiMenuAlt3)`
display:none;
@media screen and (max-width:760px){
  display:block;
  background-size:contain;
  height:40px;
  width:40px;
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-50%,25%);
}
`;
const MenuBar=styled(FaTimes)`
display:none;
@media screen and (max-width:760px){
  display:block;
  background-size:contain;
  height:40px;
  width:40px;
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-50%,25%);
}
`;
const NavMenu =styled.div`
display:flex;
align-items:center;
margin-right:-40px;
@media screen and (max-width:760px){
  display:none;

}
`;
const NavMenuLink=styled(Link)`
display:flex;
align-items:center;
${NavLink}
`;
const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:90px;
@media screen and (max-width:760px){
  display:none;
}
`;
const MobileIcon=styled.div`
`;

function Navbar() {
  const [click, setClick] = useState(false)
  const handleclick=()=>{
    setClick(!click)
  }
  return (
    <Nav>
      <Logo>ELIXR</Logo>
      <MobileIcon onClick={handleclick}>{click ? <MenuBar/> :<MenuBars/ >}</MobileIcon>
      <NavMenu>
        {MenuData.map((item,index)=>(
          <NavMenuLink to={item.link} key={index}>
            {item.title}

          </NavMenuLink>

        ))}
      </NavMenu>
      <NavBtn>
        <Button to='/contact' primary='true'> Contact us</Button>
      </NavBtn>
      

      
    </Nav>
  )
}

export default Navbar
