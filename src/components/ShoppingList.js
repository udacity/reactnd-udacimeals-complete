import React from 'react'

export default function ShoppingList ({ list }) {
  return (
    <div className='ingredients-list'>
      <h3 className='subheader'>
        Your Shopping List
      </h3>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}