import Header from "./Components/Header";
import Main from "./Components/Main";
import"./App.css";
import FontStyles from "./Components/Header.styled";

function App() {
    
    return ( < div className = "App" >
        <FontStyles />

        <Header/>
        <Main/>
    </div>
    );
}

export default App;