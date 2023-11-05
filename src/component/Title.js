import React from 'react'

function Title({heading,subheading}) {
  return (
    <>
        <h1 className="font-weight-bold">{heading}</h1>
      <p className="font-weight-bold blockquote-footer pt-2">{subheading}</p>
    </>
  )
}

export default Title