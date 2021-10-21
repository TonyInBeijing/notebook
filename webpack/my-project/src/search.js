'use strict';

import React from "react";
import ReactDOM from 'react-dom';
import "./search.less";
import img from "./images/img.jpeg";

class Search extends React.Component {
    render() {
        return (
            <div className="search-text">
                Search Page 123
                <img src={img} />
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById("root")
);