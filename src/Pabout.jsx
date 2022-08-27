import React from "react";

const Pabout = (props) => {
    return (
        <>
            <div className="contenier" id="about">
                <div className="row">
                    <div className="col-md-6 m-auto aboutcol">
                        <h1>About</h1>

                    </div>
                    <div className="col-md-6 mt-5 aboutp">
                        <p>{[props.content]}</p>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Pabout;