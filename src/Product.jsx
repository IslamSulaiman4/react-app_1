import React from 'react'
export default function Product(props) {
  return (
<>
<div className='col-md-3 d-flex flex-wrap align-items-center justify-content-center rounded rounded-3'>
<h2>{props.title}</h2>
<p>{props.desc}</p>
</div></>
  )
}
