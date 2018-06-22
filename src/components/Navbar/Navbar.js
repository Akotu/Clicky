import React from "react";
import './NavBar.css';

const Navbar = props =>(
    <nav>
        
            {}
                <p id="p">{props.title}</p>
            {}
        <ul>
            <li id='curScore'>Current Score: {props.score}</li>

            <li id='topScore'>Top Score: {props.topScore}</li>
            
            <li id='rw'>{props.rightWrong}</li>
        </ul>
    </nav>
);

export default Navbar;