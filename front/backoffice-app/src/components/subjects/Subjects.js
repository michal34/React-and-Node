import React, { useEffect, useState } from 'react';
import Header from '../header';
import Menu from '../menu';
import './Subjects.scss';
import { subjectsService } from '../../services/subjects.service';
import CheckSession from '../checkSession';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const subjectRef = React.createRef();

  const _getSubjects = () => {
    subjectsService.getSubjects()
    .then(res => {
      setSubjects(res.data.subjects);
    });
  }

  const addSubject = () => {
    const subject = subjectRef.current.value;

    subjectsService.addSubject(subject)
    .then(res => {
      if (res.data.success) {
        _getSubjects();
      }
    });
  }

  useEffect(() => {
    _getSubjects();
  },[]);

  return (
    <div className="subjects-container">
      <CheckSession></CheckSession>
      <Header></Header>
      <Menu></Menu>
      <div className="content">
        <h1>Dodaj przedmiot</h1>
        <div>
          <input ref={subjectRef} type="text" placeholder="Nazwa przedmiotu" />
          <button onClick={addSubject}>Dodaj</button>

          <div>
            <ul>
              {subjects.map((subjectObject, index) => {
                return <li key={index}>{subjectObject.name}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
