import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

/*
const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
} */

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => (<Part key={part.id} part={part} />))}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      {/*<Total course={course} />*/}
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      },
      {
        name: 'Redux',
        exercises: 11,
        id:5
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))