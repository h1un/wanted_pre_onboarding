import React from 'react';
import {useState} from 'react';
import './Tag.css';

const Tag = () => {
    const [tagData, setTagData] = useState([]);

    const removeTag = (indexToRemove) => {
        setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
    };

    const addTag = (event) => {
        if (event.target.value !== '') {
            setTagData([...tagData, event.target.value]);
            event.target.value = '';
        }
    };

    return (
        <div className="wrapper">
            <h2>Tag</h2>
            <div className="content">
                <div className="TagBox">
                    <ul className="tags">
                        {tagData.map((tag, index) => (
                            <li
                                className="tag" key={index}>
                                <span>{tag}</span>
                                <span className="removeButton" onClick={() => removeTag(index)}>&times;</span>
                            </li>
                        ))}
                    </ul>
                    <input
                        className="input"
                        type="text"
                        onKeyUp={(event) =>
                            event.key === 'Enter' ? addTag(event) : null
                        }
                        placeholder="Press enter to add a tags"
                    />
                </div>
            </div>
        </div>
    );
};

export default Tag;
