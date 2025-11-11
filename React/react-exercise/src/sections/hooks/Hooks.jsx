import React from 'react'
import Usestate from './Usestate';
import Useeffect from './Useeffect'
import Usereducer from './Usereducer';
import Usememo from './Usememo';

export default function () {
  return (
    <div>
        <h1 style={{color: "orange"}}>Let's learn React Hooks here</h1>
        <Usestate />
        <Useeffect />
        <Usereducer />
        <Usememo />
    </div>
  )
}
