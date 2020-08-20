import React from 'react';
import logo from './logo.svg';
import './App.css';
import plane from './plane.jpg';
import plane2 from './plane2.jpg';
import plane3 from './plane3.jpg';

function displayGreenImage(imageSrc, altText) {

  if (navigator.connection.type === 'cellular'){
    return <div className='photoText'>{altText}</div>
  }


  console.log(navigator)
  console.log(navigator.connection)
  console.log(navigator.connection.type)

  return <img src={imageSrc} className="App-logo" alt="logo" />
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          displayGreenImage(plane, 'Nice photo of a plane')
        }
        <p>
            Travel is fun.Blablabla
        </p>
        {
          displayGreenImage(plane2, 'One more photo of a nice plane')
        }

        <p>
          This mojito was amazing. We found it in a bar..... blabla
        </p>

        {
          displayGreenImage(plane3, 'Last photo of a nice plane')
        }

        <p>
          A great story and by luck this website is optimized for cellular content.
          On the cellular network this page weigth 861kB because we remove the images and with the WIFI this page weight 2.5 MB
        </p>

      </header>
    </div>
  );
}

export default App;
