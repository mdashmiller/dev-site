import React from 'react'
import './styles.scss'

const Footer = () => {
  return (
    <footer data-test="footer" className="page-footer">
      <div className="container">
        <div data-test="row" className="row">
          <div data-test="col" className="col s12 l6">
            <h5 data-test="title">About Me</h5>
            <p data-test="content">
              I graduated from the University of Texas 
              in Austin with a B.A. in psychology and 
              afterwords, like many of us, had no idea 
              what to do for a career. I spent many years 
              exploring my interests in film making, 
              music, painting, history, literature, 
              engineering, medicine and about a dozen 
              other things while paying the bills with 
              office jobs, sales jobs, service industry 
              jobs, you name it. And then I discovered 
              software development and coding.
            </p>
            <p data-test="content">
              After learning the basics I completed the 
              front-end development course at freeCodeCamp 
              and then went on to learn full stack application 
              development at the University of YouTube and 
              Stack Overflow Academy, with lots of help from <a
              href="https://www.robinwieruch.de/" target="_blank" rel="noopener noreferrer">
              Robin Wieruch</a>, <a href="https://marijnhaverbeke.nl/" 
              target="_blank" rel="noopener noreferrer"> Marijn Haverbeke</a>, <a
              href="https://www.thenetninja.co.uk/" target="_blank" rel="noopener noreferrer">
               Shaun Pelling</a> and several others.
            </p>
            <p data-test="content">
              I currently live in the Houston area and in my 
              free time enjoy playing guitar and piano 
              and watching various sports of all kinds.
            </p>
          </div>
          <div data-test="col" className="col s12 l4 offset-l2">
            <h5 data-test="title">Connect</h5>
            <ul>
              <li><a data-test="link" href="linkedin.com">LinkedIn</a></li>
              <li><a data-test="link" href="github.com">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div data-test="copy-div" className="footer-copyright">
        <div data-test="copyright" className="container center-align">
          &copy; 2019 Matt Miller
        </div>
      </div>
    </footer>
  )
}

export default Footer
