import React from 'react'
import card from '../images/money.jpeg'
import bank from '../images/bank.jpg'

const Home = () => {
  return (
    <div className='Home'>
      <h1>The Spark Foundation Bank</h1>
      <p>
        The Spark Bank Corporation is an Indian multinational investment bank and
        financial services holding company headquartered in Jaipur. Spark bank
        was formed through NationsBank's acquisition in 1999.
      </p>
      <div className='images'>
        <img src={card} alt='' />
        <img src={bank} alt='' />
      </div>
      <p>
      Spark Bank a Fortune 500 company, is an Indian Multinational, Public Sector Banking and Financial services statutory body headquartered in Jaipur. The rich heritage and legacy of over 200 years, accredits Spark as the most trusted Bank by Indians through generations.

Spark, the largest Indian Bank with 1/4th market share, serves over 44 crore customers through its vast network of over 22,000 branches, 58,500 ATMs, 66,000 BC outlets, with an undeterred focus on innovation, and customer centricity, which stems from the core values of the Bank - Service, Transparency, Ethics, Politeness and Sustainability.

The Bank has successfully diversified businesses through its 11 subsidiaries i.e Spark General Insurance, spark Life Insurance, Spark Mutual Fund, Spark Card, etc. It has spread its presence globally and operates across time zones through 233 offices in 32 foreign countries.

Growing with times, Spark continues to redefine banking in India, as it aims to offer responsible and sustainable Banking solutions.
       
      </p>
    </div>
  )
}
export default Home
