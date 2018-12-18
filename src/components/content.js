import React from 'react';
import {Route} from "react-router-dom";
import About from "/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/components/about.js"
import Contact from "/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/components/contact.js"
import Projects from "/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/components/projects.js"

const Content = () => {
  return (<div className="mx-auto h-100 col-md-12  wrapper my-margin">
    <Route
      exact="exact"
      path="/"
      component={About}/>
      <Route
        path="/about"
        component={About}/>
    <Route
      path="/projects"
      component={Projects}/>
    <Route
      path="/contact"
      component={Contact}/>
  </div>)
}

export default Content
