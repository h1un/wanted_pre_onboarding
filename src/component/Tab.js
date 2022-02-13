import React, {useState} from 'react';
import './../App.css';
import './Tab.css';

const tabList = [
    {
        title: 'Tab1',
        content: 'Tab menu ONE'
    },
    {
        title: 'Tab2',
        content: 'Tab menu TWO'
    },
    {
        title: 'Tab3',
        content: 'Tab menu THREE'
    }
];

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const selectTab = (index) => {
        setActiveTab(index);
    }
    return (
        <div className="wrapper">
            <h2>Tab</h2>
            <ul className="tabBar">
                {tabList.map((tab, index) => {
                    return <li key={index}
                               onClick={() => selectTab(index)}
                               className={`${index === activeTab ? 'tab active' : 'tab'}`}>
                        {tab.title}
                    </li>
                })}
            </ul>
            <div className="content">{tabList[activeTab].content}</div>
        </div>
    )
};

export default Tab;
