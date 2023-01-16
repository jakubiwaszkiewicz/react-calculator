import "./Content.css"
import React, { useState, useEffect } from "react"
import NumberBtn from './NumberBtn/NumberBtn'
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



    const changeNumbers = prevState => {
        setFirstNumbers(prevState)
    }

    useEffect(() => console.log(firstNumbers),[firstNumbers])

    return (
        <div className="content">
            <div className="display"><span>{firstNumbers === "" ? "0" : firstNumbers}</span></div>
            <div className="flex-container-row">
                <div className="flex-container-column numbers">
                    {dataOperators.map((singleData) => {
                        return (
                            <NumberBtn
                                key={singleData.id}
                                id={singleData.id}
                                changeNumbers = {changeNumbers}
                                firstNumbers = {firstNumbers}
                            />
                    )})}
                </div>
                <div className="flex-container-column">
                    {data.map((singleData) => {
                        return (
                            <NumberBtn
                                key={singleData.id}
                                id={singleData.id}
                                changeOperator = {changeNumbers}
                                firstNumbers = {firstNumbers}
                            />
                        )})}
                </div>
            </div>
        </div>
    );
}

export default Content;
