import React from 'react';
import ImgJacareInicial from '../assets/jacare_inicial.png';
import ImgJacareDurante from '../assets/jacare_durante.png';
import ImgJacareBom from '../assets/jacare_bom.png';
import ImgJacareRuim from '../assets/jacare_ruim.png';
import ImgJacareMedio from '../assets/jacare_medio.png';
import {statusJacare} from '../constantes';

const JacareComponent = ({ status }) => {
  switch (status) {
    case statusJacare.inicial:
      return <img src={ImgJacareInicial} alt="Imagem inicial jacaré" />;
    case statusJacare.durante:
      return <img src={ImgJacareDurante} alt="Imagem durante jacaré" />;
    case statusJacare.bom:
      return <img src={ImgJacareBom} alt="Imagem bom jacaré" />;
    case statusJacare.ruim:
      return <img src={ImgJacareRuim} alt="Imagem ruim jacaré" />;
    case statusJacare.medio:
      return <img src={ImgJacareMedio} alt="Imagem medio jacaré" />;
    default:
      return <img src={ImgJacareInicial} alt="Imagem inicial jacaré" />;
  }
};

export default JacareComponent;
