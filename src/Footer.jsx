import React from "react";
import { useState } from "react";



const Footer = () => {
   
    const [msgname,upname]=useState();
    const submsg=()=>{
         alert(`thanking you ${msgname} sir your responce is submit success fully`);
         
    }   
    return (
        <>
            <div className="footer-dark">
                <footer>
                    <div className="container" id="contactme">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Contact me</h3><br></br>
                                <ul>
                                    <li><a href="mailto:maazratlam5@gmail.com" target="_blank" rel="noreferrer">Gmail :- maazratlam5@gmail.com</a></li><br></br>
                                    <li><a href="tel:8982001240"  target="_blank" rel="noreferrer">Phone :- +91 8982001240</a></li><br></br>
                                    <li><a href="https://www.instagram.com/maaz_hussain__/?hl=en" target="_blank" rel="noreferrer">instagram :- maaz_hussain__</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="https://drive.google.com/file/d/1qJu7Y2-n9O97yIB5fTYGhQdOiNdl9nkY/view?usp=sharing" target="_blank"  rel="noopener noreferrer">Resume</a></li>
                                    <li><a href="/">github profile</a></li>
                                    <li><a href="/">CV</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <form>

                                    <div className="form-outline mb-1">
                                        <input type="text" id="form4Example1" className="form-control" onChange={(event) => { let namein = event.target.value; upname(namein); }} />
                                        <label className="form-label" >Name</label>
                                    </div>

                                    <div className="form-outline mb-1">
                                        <textarea className="form-control" id="form4Example3" rows="4" onChange={(event) => { let msgin = event.target.value; console.log(msgin) }}></textarea>
                                        <label className="form-label" >Message</label>
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block mb-1" onClick={submsg} >
                                        Send
                                    </button>
                                </form>
                            </div>
                            <div className="lastdiv"><a className="lastbtn" href="#nameintro"><i className="fa-solid fa-chevron-up"></i></a></div>
                            <div className="col item social"><a href="https://wa.me/8982001240" target="_blank"  rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a><a href="https://www.linkedin.com/in/maaz-hussain-3687771a7" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a><a href="https://www.instagram.com/maaz_hussain__/?hl=en" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a><a href="/"><i className="fa-brands fa-facebook-f"></i></a></div>
                        </div>
                        
                        <p className="copyright">Maaz hussain Portfolio website  © 2022</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Footer;