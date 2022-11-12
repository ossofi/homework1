import styled from 'styled-components'
export const StyledList = styled.ul `
 overflow-x: scroll;
white-space: nowrap;
height: 300px;
width: 1175px;
margin-left: 300px;
padding-top: 200px;
`;

export const StyledListItem = styled.li `
height: 165px;
background-image: url(${(props) => props.url});
padding-top: 100px;
background-repeat: no-repeat;
width: 290px;
display: inline-block;
list-style-type: none;
white-space: nowrap;
border: 2px white solid;

`;
export const Mainn = styled.div `
height: 800px;
background-color: #EAF0F9;`

export const Container = styled.div `
   max-width: 1750px;
    margin: auto;

    height: 900px;
    width: 100%;
`