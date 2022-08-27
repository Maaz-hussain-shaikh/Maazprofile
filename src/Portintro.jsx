
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Portintro = () => {
    const [ctheme,uptheme]=useState("themelight");

    const changetheme=()=>{
        ctheme === "themelight" ? uptheme("themeDark") : uptheme("themelight");
        }
    useEffect(()=>{
document.body.className=ctheme;
    },[ctheme]);
    return (
        <>
            <div className="contraine-fluid " >
                <div className="row">
                    <div className="col-md-6">
                        <div className="detel">
                            <h1><span className="helloo " id="nameintro">Hello</span> I,M Maaz Hussain</h1>
                            <p>This is my official Portfolio website to showcase my
                                all works <br /> related to  web development and design. </p>
                            <a href="https://drive.google.com/file/d/1qJu7Y2-n9O97yIB5fTYGhQdOiNdl9nkY/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                                    <button type="submit"  className="dark-btn" onClick={changetheme}>
                                    <i className="fa-solid fa-moon"></i>
                                    </button>
                        </div>
                    </div><div className="col-md-6">

                        <div className="Mpics">
                            <img src="img/shape.jpg" className="shape" alt="shep" />
                            <img src="./img/Mphoto.jpg" className="boy" alt="MaazImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="social">
                <NavLink to="/"><i className="fa-brands fa-github"></i></NavLink>
                <a href="https://www.instagram.com/maaz_hussain__/?hl=en"  target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/maaz-hussain-3687771a7" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <hr />
        </>
    )
}
export default Portintro;