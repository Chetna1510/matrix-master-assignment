
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChildA from './ChildA';
import Main from "./sections/Main";
import Main2 from './sections/Main2';
import Lifecycle from './sections/Lifecycle';
import Routing from './sections/routing/Routing';
import Component from './sections/Component';
import Header from './sections/Header';
import Hooks from './sections/hooks/Hooks';
import UserInfo from './sections/routing/UserInfo';
import UserPosts from './sections/routing/UserPosts';

function App() {

  let name = "LearningCurve";
  let course = "REACT";

  return (
    <>
      <BrowserRouter>
      <div className='App'>
        <div id="prop-test">
            Hello Friends
            <ChildA prop1={name}  prop2={course}/>
        </div>
        <Header />
        <Routes>
          <Route path="/component" element={<Component />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main2" element={<Main2 />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
        </Routes>
        {/* React Hooks */}
        <div className='react-hooks'>
          <Routes>
            <Route path="/hooks" element={<Hooks />} />
          </Routes>
        </div>
      </div>
        {/* React Routing and Routes */}
        <Routes>
          <Route path="/routing" element={<Routing />} />
          <Route path="/user/:id" element={<UserInfo />} />
          <Route path="/posts/:postid" element={<UserPosts />} />

        </Routes>   
        <h3 className='footer'>Footer - copyright</h3>
      </BrowserRouter>
      
    </>
  )
}

export default App
