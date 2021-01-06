import React from 'react'
import ReactDOM from 'react-dom'


const Header = (coursename) => {
  return (
    <div>
      <h1>
        {coursename.course}
      </h1>
    </div>
  )
}

const Content = (content) => {
  return (
    <div>
      <p>
        <Part part={content.part1} exrcises={content.exercises1} />
      </p>
      <p>
        <Part part={content.part2} exrcises={content.exercises2} />
      </p>
      <p>
        <Part part={content.part3} exrcises={content.exercises3} />
      </p>
    </div>
  )
}

const Part = (content_part) => {
  return (
    <div>
      <p>
        {content_part.part} {content_part.exrcises}
      </p>
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>
        Number of exercises = {total.number}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total number={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))