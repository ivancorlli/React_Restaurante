import React from "react";

import "../css/carousel.css";

const Carousel = () => {
  return (
    <div style={{ background: "#000000" }}>
      <div class="logoCSS">
        <h1>
          <i class="bi bi-egg-fried"></i> Rolling-Menú{" "}
          <i class="bi bi-egg-fried"></i>
        </h1>
      </div>
      <div className="d-flex justify-content-evenly py-2 contentInfo">
        <div className="d-flex flex-column justify-content-between logoName">
          <i class="bi bi-clock-history text-center fs-1"></i>
          <h3 className="text-center">AHORRÁ TIEMPO</h3>
          <p className="text-center">
            Corremos para hacerte la vida más fácil. Seguí en tus actividades
            del día a día que Rolling-Menú te lleva TODO.
          </p>
        </div>
        <div className="d-flex flex-column justify-content-between logoName">
          <i class="bi bi-calendar-week text-center fs-1"></i>
          <h3 className="text-center">BUENOS HORARIOS</h3>
          <p className="text-center">
            Trabajamos para llevarte los mejores platos en horarios pensados para tu comodidad. Estamos atentos a tus necesidades.
          </p>
        </div>
        <div className="d-flex flex-column justify-content-between logoName">
          <i class="bi bi-cart text-center fs-1"></i>
          <h3 className="text-center">ENCONTRAS DE TODO</h3>
          <p className="text-center">
          Ya no tenés que salir de tu oficina para disfrutar lo mejor de tu ciudad. Todo lo que necesitás, a un click de distancia.
          </p>
        </div>
      </div>

      {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./media/img/Carousel/Comida1.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./media/img/Carousel/Comida2.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="./media/img/Carousel/Comida3.jpg" className="d-block w-100" alt="..."/>
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
        </div> */}
    </div>
  );
};

export default Carousel;
