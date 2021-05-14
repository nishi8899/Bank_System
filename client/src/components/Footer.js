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
 <div class="col-md-6 text-center">
            <ul class="social-icons">
              Contact Me:
              <li><a target="_blank" class="github" href="https://github.com/nishi8899/"><i class="fab fa-github fa-2x"></i></a></li>
              
              <li><a target="_blank" class="linkedin" href="https://www.linkedin.com/in/nishi-singh-722855175"><i class="fab fa-linkedin fa-2x"></i></a></li>   
            </ul>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer
