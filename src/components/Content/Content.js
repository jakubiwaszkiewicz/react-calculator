import "./Content.css"
import React, { useState } from "react"
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
        {id:"+"}, {id:"-"}, {id:"*"}, {id:"/"}
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

    const equalClicked = () => {
        const firstNum = parseInt(firstNumbers)
        const secondNum = parseInt(secondNumbers)
        let result = 0
        const CCleaner = (result) => {
            setFirstNumbers(result.toString())
            setSecondNumbers("")
            setOperator("")
        }
        switch(operator) {
            case "+":
                result = firstNum + secondNum
                CCleaner(result)
                break;
            case "-":
                result = firstNum - secondNum
                CCleaner(result)
                break;
            case "*":
                result = firstNum * secondNum
                CCleaner(result)
                break;
            case "/":
                result = firstNum / secondNum
                CCleaner(result)
                break;
            default:
                break;
        }
    }

    const operationC = () => {
        setFirstNumbers("")
        setSecondNumbers("")
        setOperator("")
    }

    return (
        <div className="content">
            <div className="display">
                <span>
                    {secondNumbers === "" ?
                        (firstNumbers === "" ? "0" : firstNumbers)
                        : secondNumbers}
                </span>
            </div>
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
                    <div className="btn" onClick={operationC}>
                        <span>C</span>
                    </div>
                    {dataOperators.map((singleData) => {
                        return (
                            <OperatorBtn
                                key={singleData.id}
                                id={singleData.id}
                                changeOperator = {changeOperator}
                                operator = {operator}
                            />
                        )})}
                    <div className="btn" onClick={equalClicked}>
                        <span>=</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
