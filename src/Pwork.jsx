import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";





const Pwork = (props) => {
    const [goto, upgo] = useState("/");
    const [show, upshow] = useState("Show");

    const Navigate = useNavigate();

    const goTogal = () => {
        if (goto === "/") {
            upgo("/about");
            upshow("Show");
        } else{
            upgo("/");
            upshow("Hide");
        }
        Navigate(goto);


    }

    return (
        <>
            <div className="pwork-con" id="worksection">
                <div className="card mb-5 ">
                    <img src='./img/post web.png' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{[props.workintro]}</p>
                        <button type="button" className="btn btn-info" onClick={goTogal}>{show}</button>

                    </div>

                </div>
            </div>

        </>
    );
}
export default Pwork;