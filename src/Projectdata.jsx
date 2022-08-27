import Project1 from './Project1';
import './App.css';

function Projectdata() {

    const galleryImages = [
        {
            img: './img/post web 1.png'
        },
        {
            img: "./img/post web2.png"
        },
        {
            img: "./img/post web3.png"
        },
        {
            img: "./img/post web4.png"
        },
        {
            img: "./img/post web5.png"
        },
        {
            img: "./img/post web6.png"
        }, {
            img: "./img/post web7.png"
        }, {
            img: "./img/post web8.png"
        }
    ]

    return (
        <div className="App">
           <Project1
                galleryImages={galleryImages}
            />
        </div>
    );
}

export default Projectdata;