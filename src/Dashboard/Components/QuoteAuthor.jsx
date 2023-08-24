import React from 'react'

function QuoteAuthor(props) {
  return ( 
    <div className='quote-author text-center' style={{color:props.color}}>
      <span id='author'>--{props.author}--</span>
    </div>
  )
}

export default QuoteAuthor