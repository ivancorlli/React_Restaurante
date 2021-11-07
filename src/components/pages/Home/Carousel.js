import React from "react";
import '../css/carousel.css'

const Carousel = () => {
    return(
        <div className="container-fluid mb-2">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./media/img/tacos.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./media/img/pizza.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./media/img/hambur.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    );
}

export default Carousel;