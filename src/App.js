import React from 'react';
import PortNav from './PortNav';
import Portintro from './Portintro';
import './Port.css';
import Pabout from './Pabout';
import Skills from "./Skills";
import Pwork from "./Pwork"
import Footer from './Footer';
import Sdata from './Sdata';
import Projectdata from "./Projectdata"
import { Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    <>
      <PortNav />

      <Portintro />
      <Pabout content={Sdata[0].content} />
      <Skills javaintro={Sdata[2].javaintro} reactin={Sdata[2].reactin} htmlin={Sdata[2].htmlin} Cssin={Sdata[2].Cssin} Sass={Sdata[2].Sass} />
      <Pwork workintro={Sdata[1].workintro} />
      <Routes >
        <Route exact path='/about' element={<Projectdata />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;







