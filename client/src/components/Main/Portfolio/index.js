import React from 'react'
import './styles.scss'

import memoryGame from '../../../assets/images/memory_capture.JPG'
import weatherApp from '../../../assets/images/weather_app_capture.JPG'
import messageBoard from '../../../assets/images/msg_board_capture.JPG'
import calculator from '../../../assets/images/calculator_capture.JPG'

const Portfolio = () => {
  return (
    <section
      data-test="portfolio"
      className="container section scrollspy"
      id="portfolio"
    >
      <h2 data-test="section-title">Things I've Built</h2>
      <div data-test="row" className="row">
        <div data-test="col" className="col s12 l6">
          {/* memory game */}
          <div data-test="card" className="card">
            <div className="card-image">
              <a data-test="link" href="memorygame.com">
                <img
                  data-test="portfolio-img"
                  src={memoryGame}
                  alt="screen capture of a memory card game application"
                />
              </a>
            </div>
            <div className="card-content">
              <span data-test="card-title" className="card-title">
                Memory Game
              </span>
              <p data-test="content">
                A card-match memory game built with 
                React styled-components and CSS animations
              </p>
            </div>
          </div>
        </div>
        <div data-test="col" className="col s12 l6">
          {/* weather app */}
          <div data-test="card" className="card">
            <div className="card-image">
              <a data-test="link" href="weatherapp.com">
                <img
                  data-test="portfolio-img"
                  src={weatherApp}
                  alt="screen capture of a weather application"
                />
              </a>
            </div>
            <div className="card-content">
              <span data-test="card-title" className="card-title">
                Weather App
              </span>
              <p data-test="content">
                A RESTful API weather application that uses React Router
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-test="row" className="row">
        <div data-test="col" className="col s12 l6">
          {/* message board */}
          <div data-test="card" className="card">
            <div className="card-image">
              <a data-test="link" href="messageboard.com">
                <img
                  data-test="portfolio-img"
                  src={messageBoard}
                  alt="screen capture of a message board application"
                />
              </a>
            </div>
            <div className="card-content">
              <span data-test="card-title" className="card-title">
                Message Board
              </span>
              <p data-test="content">
                A still-in-production message board using 
                Redux, Firestore and Firebase Authentication
              </p>
            </div>
          </div>
        </div>
        <div data-test="col" className="col s12 l6">
          {/* calculator */}
          <div data-test="card" className="card">
            <div className="card-image">
              <a data-test="link" href="calculator.com">
                <img
                  data-test="portfolio-img"
                  src={calculator}
                  alt="screen capture of a calculator application"
                />
              </a>
            </div>
            <div className="card-content">
              <span data-test="card-title" className="card-title">
                React Calculator
              </span>
              <p data-test="content">
                A simulation of a desktop calculator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
