import React from 'react'

export default function AnswerQuestion(props) {
  return (
    <div>
        <button key={props.key}  onClick={props.clicked} >{props.answerText}</button>
    </div>
  )
}
