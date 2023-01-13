import "./Content.css"
import React, { useState } from "react"
const Content = () => {


    return (
        <div className="content">
            <div className="display"></div>
            <div className="ce btn">
                <span>CE</span>
            </div>
            <div className="flex-container">
                <div className="btn">1</div>
                <div className="btn">2</div>
                <div className="btn">3</div>
                <div className="btn">4</div>
                <div className="btn">5</div>
                <div className="btn">6</div>
                <div className="btn">7</div>
                <div className="btn">8</div>
                <div className="btn">9</div>
                <div className="btn">0</div>
        </div>
        <div className="flex-container">
            <div className="btn">+</div>
            <div className="btn">-</div>
            <div className="btn">*</div>
            <div className="btn">/</div>
        </div>
        </div>
    );
}

export default Content;
