import React, { useEffect, useState } from 'react';
import Header from '../header';
import Menu from '../menu';
import './Plans.scss';
import CheckSession from '../checkSession';
import { subjectsService } from '../../services/subjects.service';
import { classesService } from '../../services/classes.service';
import { plansService } from '../../services/plans.service';

const Plans = () => {
  const classIdRef = React.createRef();

  const hours = [
    ['08:55', '09:40', 10],
    ['09:50', '10:35', 15],
    ['10:50', '11:35', 10],
    ['11:45', '12:30', 30],
    ['13:00', '13:45', 15],
    ['14:00', '14:45', 10],
    ['14:55', '15:40', 5],
    ['15:50', '16:00', 0],
  ];

  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [plans, setPlans] = useState({ 1: [], 2: [], 3: [], 4: [], 5: [] });

  const getClassPlan = (classId) => {

    plansService.getPlans(classId)
    .then(res => {
      if (res.data.success) {
        setPlans(res.data.plan);
      }
    });
  };

  const setSubject = (e) => {
    const value = e.target.value.split('_');

    const classId = classIdRef.current.value;
    const day = e.target.dataset.day;
    const subjectId = value[1];
    const lessonNumber = value[0];

    const subjectData = { classId, day, subjectId, lessonNumber };

    plansService.setPlans(subjectData)
    .then(res => {
      if (res.data.success) {
        getClassPlan(classId);
      }
    });
  }

  useEffect(() => {
    classesService.getClasses()
    .then(res => {
      setClasses(res.data.classes);
      getClassPlan(res.data.classes[0]._id);
    });
    subjectsService.getSubjects()
    .then(res => {
      setSubjects(res.data.subjects);
    });
  },[]);

  return (
    <div className="plans-container">
      <CheckSession></CheckSession>
      <Header></Header>
      <Menu></Menu>
      <div className="content">
        <h1>Edytuj plan zajęć</h1>
        <select ref={classIdRef} className="classes" onChange={() => getClassPlan(classIdRef.current.value)}>
          {classes.map((classObject, index) => {
            return <option key={index} value={classObject._id}>{classObject.name}</option>
          })}
        </select>
        <div className="plan">
          <div className="col">
            <p className="sub-name">Poniedziałek</p>
            {hours.map((hour, indexLesson) => {
              return <div className="sub" key={indexLesson}>
                <span>{indexLesson + 1}. {hour[0]}-{hour[1]} </span>
                <select data-day="1" onChange={(e) => setSubject(e)} value={`${indexLesson}_${plans[1][indexLesson]}`}>
                  {subjects.map((subjectObject, index) => {
                    return <option key={index} value={`${indexLesson}_${subjectObject._id}`}>{subjectObject.name}</option>
                  })}
                </select>
              </div>
            })}
          </div>
          <div className="col">
            <p className="sub-name">Wtorek</p>
            {hours.map((hour, indexLesson) => {
              return <div className="sub" key={indexLesson}>
                <span>{indexLesson + 1}. {hour[0]}-{hour[1]} </span>
                <select data-day="2" onChange={(e) => setSubject(e)} value={`${indexLesson}_${plans[2][indexLesson]}`}>
                  {subjects.map((subjectObject, index) => {
                    return <option key={index} value={`${indexLesson}_${subjectObject._id}`}>{subjectObject.name}</option>
                  })}
                </select>
              </div>
            })}
          </div>
          <div className="col">
            <p className="sub-name">Środa</p>
            {hours.map((hour, indexLesson) => {
              return <div className="sub" key={indexLesson}>
                <span>{indexLesson + 1}. {hour[0]}-{hour[1]} </span>
                <select data-day="3" onChange={(e) => setSubject(e)} value={`${indexLesson}_${plans[3][indexLesson]}`}>
                  {subjects.map((subjectObject, index) => {
                    return <option key={index} value={`${indexLesson}_${subjectObject._id}`}>{subjectObject.name}</option>
                  })}
                </select>
              </div>
            })}
          </div>
          <div className="col">
            <p className="sub-name">Czwartek</p>
            {hours.map((hour, indexLesson) => {
              return <div className="sub" key={indexLesson}>
                <span>{indexLesson + 1}. {hour[0]}-{hour[1]} </span>
                <select data-day="4" onChange={(e) => setSubject(e)} value={`${indexLesson}_${plans[4][indexLesson]}`}>
                  {subjects.map((subjectObject, index) => {
                    return <option key={index} value={`${indexLesson}_${subjectObject._id}`}>{subjectObject.name}</option>
                  })}
                </select>
              </div>
            })}
          </div>
          <div className="col">
            <p className="sub-name">Piątek</p>
            {hours.map((hour, indexLesson) => {
              return <div className="sub" key={indexLesson}>
                <span>{indexLesson + 1}. {hour[0]}-{hour[1]} </span>
                <select data-day="5" onChange={(e) => setSubject(e)} value={`${indexLesson}_${plans[5][indexLesson]}`}>
                  {subjects.map((subjectObject, index) => {
                    return <option key={index} value={`${indexLesson}_${subjectObject._id}`}>{subjectObject.name}</option>
                  })}
                </select>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
