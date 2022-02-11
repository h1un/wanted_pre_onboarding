import logo from './logo.svg';
import './App.css';
import Toggle from "./component/Toggle";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <Toggle/>
        </div>
    );
}

export default App;
