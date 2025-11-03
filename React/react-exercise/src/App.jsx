import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChildA from './ChildA';
import Header from "./sections/Header";
import Main from "./sections/Main";
import Main2 from './sections/Main2';

function App() {

  let name = "Application";
  let course = "FSD";

  return (
    <>
      <div id="prop-test">
        Hello World
        <ChildA prop1={name}  prop2={course}/>
      </div>
      <Header />
      <Main />
      <Main2 />
      <h3>copyright</h3>
    </>
  )
}

export default App
