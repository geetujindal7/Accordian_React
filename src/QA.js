import React, { useState } from 'react'



function QA(props) {

    const [show, setShow] = useState(false)
    return (
            <>

                <div className="QuestionCard">
                    <h3 className="title">{props.title}</h3>
                    <button className="btn" onClick={() => setShow(!show)}>{show ? "-" : "+"}</button>

                </div>
                <div>
                    {show && <p className="QuestionCard info">{props.info}</p>}
                </div>
            </>
    );
}

export default QA

