import "./Content.css"
import React, { useState } from "react"
import NumberBtn from './NumberBtn/NumberBtn'
const Content = () => {
    const data =  [
        {id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}, {id:7}, {id:8}, {id:9}, {id:0},
    ]


    return (
        <div className="content">
            <div className="display">serwus</div>
            <div className="flex-container-row">
                <div className="flex-container-column numbers">
                    {data.map((singleData) => {
                        return (
                            <NumberBtn
                                key={singleData.id}
                                id={singleData.id}
                            />
                    )})}
                </div>
                    <div className="flex-container-column">
                    <div className="btn">+</div>
                    <div className="btn">-</div>
                    <div className="btn">*</div>
                    <div className="btn">/</div>
                    <div className="btn">CE</div>
                </div>
            </div>
        </div>
    );
}

export default Content;
