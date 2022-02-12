import logo from './logo.svg';
import './App.css';
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <Toggle/>
            <Modal/>
            <Tab/>
            {/*<Tag/>*/}
            {/*<AutoComplete/>*/}
            <ClickToEdit/>
        </div>
    );
}

export default App;
