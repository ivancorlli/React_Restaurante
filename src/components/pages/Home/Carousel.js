import React from "react";

import "../css/carousel.css";

const Carousel = () => {
  return (
    <div style={{ background: "#2a2a2a" }} className="pb-5">
      <div class="logoCSS">
        <h1 className="text-light">
          <i class="bi bi-egg-fried"></i> Rolling-Menú{" "}
          <i class="bi bi-egg-fried"></i>
        </h1>
      </div>
      <div className="d-flex justify-content-evenly py-2 contentInfo text-light">
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
    </div>
  );
};

export default Carousel;
