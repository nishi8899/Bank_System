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
      <div>
        <h4>Contact us</h4>
        <p>Telephone: 123-123-1234</p>
        <p>Email: sparkbank@email.com</p>
      </div>
      <p className='copyright'>Spark Bank Copyright &copy; {getYr()}</p>
      <div>
        <h4>Address</h4>
        <p>89,Malviya Nagar,</p>
        <p>Near Jagatpura,</p>
        <p>Jaipur, India</p>
      </div>
    </footer>
  )
}

export default Footer
