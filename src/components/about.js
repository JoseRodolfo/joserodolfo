import React from 'react'
import Me from '/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/images/me_head.jpg'

const About = () =>{

  const para = {
    color: '#271e4b '
  }

  const open = {
    color: 'green'
  }

  const dot ={
    borderTop: 'dotted 1px',
    width: '45%',
    color: 'blue',
  }


  return(
      <div className=" mx-auto col-md-8 justify-contents-center wrapper">

            {/* row one */}
            <div className="mt-5 my-margin row ">
              <img className="rounded-circle me" src={Me} alt="me"/>
                <div className="align-self-center">
                  <h4 className="ml-4 mb-3 justify-content-center"> <span className="span-blue"><strong> I Have a Passion For Crafting Elegant Solutions,</strong></span> </h4>
                  <h4 className="ml-4 "><span className="span-blue"><strong> To Complex Problems </strong></span></h4>
                </div>
            </div>

            {/* row two */}
              <div className="my-margin">
                <p><span className="span-red"><strong>About Me</strong></span></p>
                <p className=" " style={open}>Open to opportunites!</p>
                <h1>Web Developer Jose, Seeks to Join Like-Minded Team!</h1>
              </div>

              <strong><hr className="my-margin"style={dot} /></strong>

              <p className=" line my-margin" style={para}>I love learning new tricks and getting inspired by the web community! , a major contributor to my learning of new skills. I solidify my Javascript, CSS and, HTML skills as my foundation by reading documentatio, workign on personal projects and pracitcing snippets on code! i enjoy learning new technologies built off of these languages but i enjoy more the challenge of taking on something new. I'm seeking to jon a pack of individuals that i can contribute too and passionate enough to share their experince in the Dev craft! </p>

              <button className="my-margin col-md-2">Resume</button>





      </div>

  )
}

export default About
