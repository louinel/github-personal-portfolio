import React from 'react'
import './List.css'

function List({ items }) {
  return (
    <ul>
        {items.map((item) => (
          <li 
            key={item.field}
            className='List-style'
          >
            <span className='List-fields'>{item.field}: </span>
            {item.value}
          </li>
        ))}
    </ul>
  )
}

export default List