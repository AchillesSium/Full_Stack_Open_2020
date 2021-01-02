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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))