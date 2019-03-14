import React from 'react'

import './styles.scss'

import turing from '../../../assets/images/turing.jpg'
import ladyCardPuncher from '../../../assets/images/lady-card-puncher.jpg'
import colossus from '../../../assets/images/colossus.jpg'

const About = () => {
  return (
    <section
      data-test="about"
      className="container section scrollspy"
      id="about"
    >
      {/* about me */}
      <div data-test="row" className="row">
        <div data-test="col" className="col s12 l4">
          <img
            data-test="about-img"
            src={turing}
            alt="a young Alan Turing"
            className="responsive-img"
          />
        </div>
        <div data-test="col" className="col s12 l6 offset-l1">
          <h2 data-test="title">Who I Am</h2>
          <p data-test="info">
            I'm a designer, a problem-solver, and a lifelong student with 
            a passion for learning, self-taught in software development 
            with over 2 years experience building web applications, 
            creating user interfaces and coding. I'm a college graduate 
            who decided to try a bunch of different stuff after school 
            and eventually found software development to be the place 
            where all my interests, skills and personality traits 
            could work together. I'm an enthusiast about designing 
            and building things that meet a need, benefit people 
            and make life better.
          </p>
        </div>
      </div>
      {/* UX */}
      <div data-test="row" className="row">
        <div data-test="col" className="col s12 l4 push-l7 offset-l1">
          <img
            data-test="about-img"
            src={ladyCardPuncher}
            alt="a woman using a mid-century card-punch machine"
            className="responsive-img"
          />
        </div>
        <div data-test="col" className="col s12 l6 pull-l5 right-align offset-l1">
          <h2 data-test="title">User Experience</h2>
          <p data-test="info">
            Software, like any other product, is only as good as the 
            experience it provides the user. I believe in developing 
            applications that are intuitive and enjoyable with 
            effortless usability. A design should be sleek but 
            accessible, where everything you need is at your 
            fingertips and everything works (quickly!) the 
            way you'd expect.
          </p>
        </div>
      </div>
      {/* React.js */}
      <div data-test="row" className="row">
        <div data-test="col" className="col s12 l4">
          <img
            data-test="about-img"
            src={colossus}
            alt="Dorothy Du Boisson and Elsie Booker programming the Colossus computer in 1943"
            className="responsive-img"
          />
        </div>
        <div data-test="col" className="col s12 l6 offset-l1">
          <h2 data-test="title">React JS</h2>
          <p data-test="info">
            As a full stack capable developer I have experience with 
            everything from HTML markup to working with REST APIs, 
            databases and server-side cloud functions. My area 
            of focus is client-side JavaScript and building 
            single-page applications with React and Redux. 
            While I have spent most of my time working in vanilla 
            JavaScript and React, I am also proficient with 
            Node.js, Express, MongoDB and Firebase as well 
            as SCSS and the basics of PHP and SQL.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
