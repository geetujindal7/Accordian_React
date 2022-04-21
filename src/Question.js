import React from 'react'
import QA from './QA';
import questions from './data';


function Question() {
    return (
        <div className="card">
        <div style={{display:"flex", width:"60%"}}>
        <h3 className="heading">Questions and Answers about login</h3> </div>
        {questions.map((question) => {
            return (
                <div style={{width:"30%"}}>
              <QA key={question.id} {...question}></QA>
              </div>
            );
          })}
        </div>
    )
}

export default Question
