import React from 'react'

const Footer = () => {
  const getYr = () => {
    const options = {
      year: 'numeric',
    }
    return new Date().toLocaleString('en-US', options)
  }
  return (
    <footer>
      
      <p  className='copyright'>Spark Bank Copyright &copy; {getYr()}</p>
      
    </footer>
  )
}

export default Footer
