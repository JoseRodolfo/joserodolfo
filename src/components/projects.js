import React from 'react'
import Unsplash from '/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/images/le-buzz-568591-unsplash.jpg'

const Projects = () => {

  return (<div>

    {/* projects container begin */}
    <div className="container row no-gutters">

      {/* row one */}
      <div className="col-md-12 m-4 row">
        <div className="col-md-6 ">
          <img className="" src={Unsplash} class="img-fluid" alt="Responsive"/>
        </div>

        <div className="col-md-6 ">
          <h1 className="text-center">React Web Application</h1>
          <p className="text-justify m-4 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, felis sed scelerisque eleifend, ligula justo cursus odio, in finibus sem libero vitae augue. Vestibulum blandit dapi</p>
          <button >View Project</button>
        </div>

      </div>

      {/* row two */}
      <div className="col-md-12 m-4 row">
        <div className="col-md-6">
          <h1 className="text-center">React Web Application</h1>
          <p className="text-justify m-4 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, felis sed scelerisque eleifend, ligula justo cursus odio, in finibus sem libero vitae augue. Vestibulum blandit dapi</p>
          <button>View Project</button>
        </div>

        <div className="col-md-6 ">
          <img className="m-4" src={Unsplash} class="img-fluid" alt="Responsive"/>
        </div>
      </div>

      {/* row three */}
      <div className="col-md-12 m-4 row">
        <div className="col-md-6 ">
          <img className="" src={Unsplash} class="img-fluid" alt="Responsive"/>
        </div>

        <div className="col-md-6">
          <h1 className="text-center">React Web Application</h1>
          <p className="text-justify m-4 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, felis sed scelerisque eleifend, ligula justo cursus odio, in finibus sem libero vitae augue. Vestibulum blandit dapi</p>
          <button>View Project</button>
        </div>
      </div>

    </div>
  </div>)
}

export default Projects
