import "./Content.css"
import React, { useState } from "react"
import NumberBtn from './NumberBtn/NumberBtn'
const Content = () => {

    const [numbers, setNumbers] = useState([])

    const [operator, setOperator] = useState(0)

    const data =  [
        {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9}, {id:0},
    ]

    const add = (a, b) => {return a + b}
    const subtract = (a, b) => {return a - b}
    const multiply = (a, b) => {return a * b}
    const divide = (a, b) => {return a / b}

    const changeNumbers = prevState => {
        setNumbers(prevState)
    }

    return (
        <div className="content">
            <div className="display"><span>{numbers[0] !== undefined ? numbers : "0"}</span></div>
            <div className="flex-container-row">
                <div className="flex-container-column numbers">
                    {data.map((singleData) => {
                        return (
                            <NumberBtn
                                key={singleData.id}
                                id={singleData.id}
                                changeNumbers = {changeNumbers}
                                numbers = {numbers}
                            />
                    )})}
                </div>
                    <div className="flex-container-column">
                    <div className="btn"><span>=</span></div>
                    <div className="btn"><span>+</span></div>
                    <div className="btn"><span>-</span></div>
                    <div className="btn"><span>*</span></div>
                    <div className="btn"><span>/</span></div>
                    <div className="btn"><span>CE</span></div>
                </div>
            </div>
        </div>
    );
}

export default Content;
