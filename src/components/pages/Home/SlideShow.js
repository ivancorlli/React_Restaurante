import React, { useRef } from "react";

import img1 from "../../Card/assets/CardCategories/Cafe.jpg";
import img2 from "../../Card/assets/CardCategories/Hambur.jpg";
import img3 from "../../Card/assets/CardCategories/Parrilla.jpg";
import img4 from "../../Card/assets/CardCategories/Pizza.jpg";
import img5 from "../../Card/assets/CardCategories/Pasta.jpg";
import img6 from "../../Card/assets/CardCategories/Postre.jpg";
import { ReactComponent as ArrowL } from "../../Card/assets/CardCategories/Left.svg";
import { ReactComponent as ArrowR } from "../../Card/assets/CardCategories/Right.svg";

import styled from "styled-components";

const SlideShow = () => {
  const Slideshow = useRef(null);

  const siguiente = () => {
    if (Slideshow.current.children.length > 0) {
      console.log(Slideshow.current);
      const primerElemento = Slideshow.current.children[0];
      Slideshow.current.style.transition = `300ms ease-out all`;

      const tamanio = Slideshow.current.children[0].offsetWidth;

      Slideshow.current.style.transform = `translateX(-${tamanio}px)`;

      const transicion = () => {
        Slideshow.current.style.transition = "none";
        Slideshow.current.style.transform = `translateX(0)`;
        Slideshow.current.appendChild(primerElemento);

        Slideshow.current.removeEventListener('transitionend',transicion);
      };

      Slideshow.current.addEventListener('transitionend', transicion);
    }
  };

  const anterior = () =>{

    if(Slideshow.current.children.length > 0){
      const index = Slideshow.current.children.length - 1;
      const ultimoElemento = Slideshow.current.children[index];
      Slideshow.current.insertBefore(ultimoElemento, Slideshow.current.firstChild);

      Slideshow.current.style.transition = 'none';

      const tamanio = Slideshow.current.children[0].offsetWidth;

      Slideshow.current.style.transform = `translateX(-${tamanio}px)`;

      setTimeout(()=>{
        Slideshow.current.style.transition = '300ms ease-out all';
        Slideshow.current.style.transform = `translateX(0)`;
      }, 30)
    }

  }

  return (
    <ContenedorPrincipal>
      <ContenedorSlideShow ref={Slideshow}>
        <Slide>
          <a href="*">
            <img src={img1} alt="" />
          </a>
          <TextoSlide>
            <p>Cafetería</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="*">
            <img src={img2} alt="" />
          </a>
          <TextoSlide>
            <p>Hamburguesas</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="*">
            <img src={img3} alt="" />
          </a>
          <TextoSlide>
            <p>Parrillada</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="*">
            <img src={img4} alt="" />
          </a>
          <TextoSlide>
            <p>Pizzas</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="*">
            <img src={img5} alt="" />
          </a>
          <TextoSlide>
            <p>Pastas</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="*">
            <img src={img6} alt="" />
          </a>
          <TextoSlide>
            <p>Postres</p>
          </TextoSlide>
        </Slide>
      </ContenedorSlideShow>
      <Controles>
        <Boton onClick={anterior}>
          <ArrowL />
        </Boton>
        <Boton derecho onClick={siguiente}>
          <ArrowR />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 50%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 9;
  max-height: 300px;
  position: relative;

  img {
    margin-left: 10px;
    width: 100%;
    vertical-align: top;
  }
`;

const TextoSlide = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin-left: 10px;

  @media screen and (max-width: 700px) {
    position: relative;
    background: black;
  }
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export default SlideShow;
