import React from 'react'

const Button = ({ handleClick, children }) => {

  console.log('Renderizando', children)

  return (
    <>
      <button onClick={handleClick}>
        {children}
      </button>
    </>
  )
}

export default React.memo(Button)