import "./Content.css"
import React, { useState, useEffect } from "react"
import NumberBtn from './NumberBtn/NumberBtn'
import OperatorBtn from './OperatorBtn/OperatorBtn'
const Content = () => {

    const [firstNumbers, setFirstNumbers] = useState("")
    const [secondNumbers, setSecondNumbers] = useState("")
    const [operator, setOperator] = useState("")

    const data =  [
        {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9}, {id:0},
    ]
    const dataOperators =  [
        {id:"+"}, {id:"-"}, {id:"*"}, {id:"/"}, {id:"CE"}
    ]



    const changeFirstNumbers = prevState => {
        setFirstNumbers(prevState)
    }
    const changeSecondNumbers = prevState => {
        setSecondNumbers(prevState)
    }
    const changeOperator = prevState => {
        setOperator(prevState)
    }

    useEffect(() => console.log(firstNumbers),[firstNumbers])
    useEffect(() => console.log(operator),[operator])

    const equalClicked = () => {
        const firstNum = parseInt(firstNumbers)
        const SecondNum = parseInt(secondNumbers)

    }

    return (
        <div className="content">
            <div className="display"><span>{secondNumbers === "" ? firstNumbers : secondNumbers}</span></div>
            <div className="flex-container-row">
                <div className="flex-container-column numbers">
                    {data.map((singleData) => {
                        return (
                            <NumberBtn
                                key={singleData.id}
                                id={singleData.id}
                                changeFirstNumbers = {changeFirstNumbers}
                                firstNumbers = {firstNumbers}
                                changeSecondNumbers = {changeSecondNumbers}
                                secondNumbers = {secondNumbers}
                                operator = {operator}
                            />
                    )})}
                </div>
                <div className="flex-container-column">
                    <div className="btn" onClick={equalClicked}>
                        <span>=</span>
                    </div>
                    {dataOperators.map((singleData) => {
                        return (
                            <OperatorBtn
                                key={singleData.id}
                                id={singleData.id}
                                changeOperator = {changeOperator}
                            />
                        )})}
                </div>
            </div>
        </div>
    );
}

export default Content;
