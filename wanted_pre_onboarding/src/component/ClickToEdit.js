import "./ClickToEdit.css";
import React, {useState} from 'react';

function ClickToEdit() {
    const body = document.querySelector("body");
    const [inputName, setInputName] = useState(["김코딩"]);
    const [inputAge, setInputAge] = useState([20]);

    const clickTap = () => {
        const nameInput = document.querySelector("#name").value;
        const ageInput = document.querySelector("#age").value;

        setInputName(nameInput);
        setInputAge(ageInput);
    };

    body.addEventListener('clickTap', clickTap);

    return (
        <div className="wrapper">
            <h2>ClickToEdit</h2>
            <div className="content clickToEdit">
                <div>
                    <label>이름</label>
                    <input type="text" id="name"></input>
                </div>
                <div>
                    <label>나이</label>
                    <input type="text" id="age"></input>
                </div>
                <section className="output-area">
                    <p>이름 {inputName} 나이 {inputAge}</p>
                </section>
            </div>

        </div>
    );
}

export default ClickToEdit;
