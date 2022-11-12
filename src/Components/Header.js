import React from 'react'
import logo from '../logo_vector.png'
import night from '../Night.png'
import account from '../AccountCircle.png'
import "./Header.css"
import Headerstyled from '../Components/Header.styled'
import{ useState } from 'react';

import{
  Container,
  Logo,
  Menu,
  Option1,
  Option2,
  Night,
  Account,
  Main,
  Text1,
  Form,
  Text2,
  Input,
  Button
} from './Header.styled'



  const Header = (props) => {
    const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
  };
  
  const handleSubmit = (e) => {
    setInputValue(e.target.value);

  };

  console.log(inputValue);

  return (
    <Container>
  <Menu>
    <Logo>
      <img src={logo} a href="#"/>
    </Logo>
    <Option1 a href="#">
      Stays
    </Option1>
    <Option2 a href="#">
      Attractions
    </Option2>
    <Night>
      <img src={night} a href="#"/>
    </Night>
    <Account>
      <img src={account} a href="#"/>
    </Account>
  </Menu>
  <Main>
    <Text1>
      Discover stays<br></br>
      to live, work or just relax</Text1>
     <Form>
     <Text2>Your destination or hotel name</Text2>   
<Input onchange={handleChange} />
   <Button>Search</Button>
   </Form></Main>
    </Container>
  );};
  
  export default Header;