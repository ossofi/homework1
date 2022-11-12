import {useState, useEffect} from 'react';

import Mainstyled from "../Components/Main.styled"

import{
    StyledList,
    StyledListItem,
    Mainn,
    Container
  } from './Main.styled'
function Main() {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fe-student-api.herokuapp.com/api/hotels')
        .then((res) => res.json())
        .then((res) => {
            setData(res);
        });

    }, []);
    
    return(
        <Container>
        <Mainn>
<StyledList>
{data.map((item) => (
<StyledListItem key ={item.imageUrl} url={item.imageUrl}/>
    ))}
</StyledList></Mainn> </Container>
    );

};
export default Main;