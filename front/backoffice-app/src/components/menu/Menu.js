import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.scss';

const Menu = () => {
    return(
        <div className="menu-container">
            <div className="menu">
                <Link className="link-container" to="/home">
                    <li className="link">
                        <p className="link_text">Home</p>
                    </li>
                </Link>
                <Link className="link-container" to="/home/classes">
                    <li className="link">
                        <p className="link_text">Klasy</p>
                    </li>
                </Link>
                <Link className="link-container" to="/home/subjects">
                    <li className="link">
                        <p className="link_text">Przedmioty</p>
                    </li>
                </Link>
                <Link className="link-container" to="/home/plans">
                    <li className="link">
                        <p className="link_text">Plany</p>
                    </li>
                </Link>
            </div>
        </div>
    );
};

export default Menu;