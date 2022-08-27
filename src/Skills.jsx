import React from "react";
import { useState } from "react";
const javalog="./img/javalog.png";
const html="./img/Html.png";
const Css="./img/Css.png";
const Sass="./img/Sass.png";
const reactlogo="./img/logo.svg";

const Skills = (props) => {
    
    const [headin, uphead] = useState("Javascript");
    const [imgsrc, upsrc] = useState(javalog);
    const [present, update] = useState(props.javaintro);
    const next = () => {
        if (present === props.javaintro) {
            update(props.reactin)
            upsrc(reactlogo);
            uphead("ReactJs")
        } if (present === props.reactin) {
            update(props.Cssin)
            upsrc(Css);
            uphead("Css")
        } if (present === props.Cssin) {
            update(props.Sass)
            upsrc(Sass);
            uphead("Sass")
        }
        if (present === props.Sass) {
            update(props.htmlin)
            upsrc(html);
            uphead("HTML")
        } if (present === props.htmlin) {
            update(props.javaintro)
            upsrc(javalog);
            uphead("Javascript")
        }
    }
    return (
        <>
            <div className="contenier mb-5">
                <div className="row flex-row-reverse">
                    <div className="col-md-6 skillscon">

                        <h1>Skills</h1>
                        <h3>React</h3>
                        <div className="containerr">
                            <div className="reactt">75%</div>
                        </div>
                        <h3>Javascript</h3>
                        <div className="containerr">
                            <div className="javascript">40%</div>
                        </div>
                        <h3>HTML</h3>
                        <div className="containerr">
                            <div className="hpp">90%</div>
                        </div>
                        <h3>Css</h3>
                        <div className="containerr">
                            <div className="css">50%</div>
                        </div>
                    </div>
                    <div className="col-md-6 m-auto mt-5">
                        <div className=" mb-3">
                            <div className="row g-0 jus">
                                <div className="col-4">
                                    <img src={imgsrc} className="img-fluid rounded-start" alt="javalog" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{headin}</h5>
                                        <p className="card-text">{present}</p>
                                        <button type="button" className="btn btn-info" onClick={next} >Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="project m-5">
                <h1>Project</h1>
            </div>
        </>
    )
}
export default Skills;