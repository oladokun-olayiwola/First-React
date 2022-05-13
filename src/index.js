//Get dependencies fro Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'



// create react component
const buttonText = { text: 'Click Me!'}
const name = "Enter Name"
const App = () => {
    return ( 
    <div>
     <label style={{ fontFamily: 'sans-serif', color: 'cyan',fontSize: "20px" }} className='label ' htmlFor="name">{ name }</label>
     <input id="name"/>
     <button style={{ backgroundColor: 'blue', color:'white' }}>{ buttonText.text }</button>
    </div>
    );
}

//show the react component on the screen
const root = ReactDOM.createRoot(   document.querySelector('#root') )
 
root.render(<App/>)