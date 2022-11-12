import styled from 'styled-components'
import bg from '../bg.png'
import RobotoLight from '../RobotoLight.ttf';
import { createGlobalStyle } from "styled-components";

export const Logo = styled.div `
    margin-top: 50px;
    float: left;
    margin-left: 150px;
`

export const Container = styled.div `
    max-width: 1750px;
    margin: auto;

    height: 900px;
    width: 100%;
    background-image: url(${bg});
`

export const Menu = styled.div `
    margin-right: 1000px;
    width: 1750px;
    height: 100px;
`

export const Option1 = styled.div `
    margin-top: 60px;
    
    float: left;
    color: white;
    margin-left: 950px;
    font-size: 15pt;
    &:hover{
    text-decoration: none;
    border-bottom: 2px #F5BD41 solid;}
`
export const Option2 = styled.div `
    margin-top: 60px;
    font-size: 15pt;
   
    float: left;
    color: white;
    margin-left: 40px;
    &:hover{
    text-decoration: none;
    border-bottom: 2px #F5BD41 solid;}
`
export const Night = styled.div `
    margin-top: 55px;
    float: left;
    margin-left: 60px;
`


const FontStyles = createGlobalStyle `

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLight}) format('ttf'),
    
}
`;
export default FontStyles;

export const Account = styled.div `
    margin-top: 50px;
    float: left;
    margin-left: 40px;
`
export const Main = styled.div `
`
export const Text1 = styled.div `

text-align: left;
    color: white;
    
    font-weight: 450;
    font-size: 50px;
    padding-left: 210px;
    margin-top: 160px;
    line-height: 58.59px;

    `
export const Form = styled.form `
`

export const Text2 = styled.div `
letter-spacing: 1px;
    color: white;
    text-align: left;
    margin-left: 200px;
    margin-top: 150px;
    
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;
`
export const Input = styled.input `
float: left;
    margin-top: 20px;
    margin-left: 180px;
    height: 70px;
    width: 400px;
    border-radius: 8px;
    line-height: 20px;
    font-size: 30px;
`

export const Button = styled.button `
height: 77px;
    width: 200px;
    float: left;
    margin-top: 20px;
    font-size: 24px;
    background-color: #3077C6;
    border-radius: 8px;
    border-color: #3077C6;
    color: white;
  
`