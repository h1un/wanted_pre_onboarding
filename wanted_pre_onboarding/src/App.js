import logo from './logo.svg';
import './App.css';
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <Toggle/>
            <Modal/>
        </div>
    );
}

export default App;
