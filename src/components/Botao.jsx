import React from 'react';
import {statusJacare} from '../constantes';
import './Botao.css';

const Botao = ({ status, onClick }) => {
  switch (status) {
    case statusJacare.inicial:
      return <button className="botao-verde botao" onClick={onClick}>Começar</button>;
    case statusJacare.durante:
      return <button className="botao-vermelho botao" onClick={onClick}>Beijar!</button>;
    case statusJacare.bom:
    case statusJacare.ruim:
    case statusJacare.medio:
      return <button className="botao-verde botao" onClick={onClick}>De novo!</button>;
    default:
      return <button className="botao-verde botao" onClick={onClick}>Começar</button>;
  }
};

export default Botao;
