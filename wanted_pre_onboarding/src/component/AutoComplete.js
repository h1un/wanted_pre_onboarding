import React, {useState, useEffect} from 'react';
import './../App.css';
import './AutoComplete.css';

const dataList = ['antique', 'refurbished', 'vintage', '중고A급', 'rustic'];

const AutoComplete = () => {
    const [inputText, setInputText] = useState("");
    const [text, setText] = useState(false);
    const [includedDataList, setIncludedDataList] = useState(dataList);

    useEffect(() => {
        if (inputText === '') {
            setText(false);
            setIncludedDataList([]);
        }
        if (inputText !== '') {
            setIncludedDataList(dataList.filter((data) => {
                    return data.toLocaleUpperCase().includes(inputText.toLocaleUpperCase())
                })
            )
        }
    }, [inputText]);

    const onChange = (e) => {
        setInputText(e.target.value);
        setText(true);
    }
    const onSelect = (value) => {
        setInputText(value);
    }
    const onClear = () => {
        setInputText("");
    }

    return (
        <div className="wrapper">
            <h2>AutoComplete</h2>
            <div className="autoComplete">
                <input
                    type="text"
                    value={inputText}
                    onChange={onChange}
                />
                <div className="clearButton" onClick={onClear}>&times;</div>
            </div>
            {text && <DropDown includedDataList={includedDataList} onSelect={onSelect}/>}
        </div>
    )
};

export const DropDown = ({includedDataList, onSelect}) => {
    return (
        <ul className="dropdown">
            {includedDataList.map((includedData, index) => {
                return <li
                    key={index}
                    onClick={() => onSelect(includedData)}
                >{includedData}
                </li>
            })}
        </ul>
    );
};
export default AutoComplete;
