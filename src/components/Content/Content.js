import "./Content.css"
import React, { useState } from "react"
import NumberBtn from './NumberBtn/NumberBtn'
const Content = () => {



    return (
        <div className="content">
            <div className="display">serwus</div>
            <div className="flex-container-row">
                <div className="flex-container-column numbers">
                    <div className="btn"><span>1</span></div>
                    <div className="btn"><span>2</span></div>
                    <div className="btn"><span>3</span></div>
                    <div className="btn"><span>4</span></div>
                    <div className="btn"><span>5</span></div>
                    <div className="btn"><span>6</span></div>
                    <div className="btn"><span>7</span></div>
                    <div className="btn"><span>8</span></div>
                    <div className="btn"><span>9</span></div>
                    <div className="btn"><span>0</span></div>
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
