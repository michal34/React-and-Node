import React, { useState, useEffect} from 'react';
import Menu from '../menu';
import Header from './../header'
import './Classes.scss';
import { classesService } from './../../services/classes.service'

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const classRef = React.createRef();

    const _getClasses = () => {
        classesService.getClasses()
        .then(res => {
            setClasses(res.data.classes);
        });
    };

    const addClass = () => {
        const className = classRef.current.value;
        
        classesService.addClasses(className)
        .then(res => {
            if (res.data.success) {
                _getClasses();
            };
        });
        classRef.current.value = ''
    };

    useEffect(() => {
        _getClasses();
    },[]);

    return(
        <div className="classes-container">
            <Header></Header>
            <Menu></Menu>
            <div className="content">
                <h1>Dodaj klasę</h1>
                <div>
                    <input ref={classRef} className="add-class-input" type="text" placeholder="Dodaj klasy" />
                    <button className="add-class-button" onClick={addClass}>Dodaj</button>
                </div>
                <div>
                    <ul>
                        {classes.map((className, index) => {
                            return <li key={index}>{className.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Classes;