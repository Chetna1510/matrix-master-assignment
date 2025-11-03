import React from 'react'

export default function List(colorProp) {
    console.log(colorProp);
  return (
    <div>
        <div className='colors-list'>
            <h3>Your Favourite colors are:</h3>
            <ul>
                {
                    colorProp && colorProp.data.map( (color, index) => {
                        return (
                            <li key={index}>{color}</li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}
