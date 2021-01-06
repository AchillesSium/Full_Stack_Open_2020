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
  const part1 = content.parts[0]
  const part2 = content.parts[1]
  const part3 = content.parts[2]
  return (
    <div>
      <p>
        <Part part={part1.name} exrcises={part1.exercises} />
      </p>
      <p>
        <Part part={part2.name} exrcises={part2.exercises} />
      </p>
      <p>
        <Part part={part3.name} exrcises={part3.exercises} />
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
  const number = total.parts.reduce((total,currentvalue) => total = total+currentvalue.exercises,0);
  return (
    <div>
      <p>
        Number of exercises = {number}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))