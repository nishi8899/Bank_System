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
      
      <p  style="text-align:center;" className='copyright'>Spark Bank Copyright &copy; {getYr()}</p>
      
    </footer>
  )
}

export default Footer
