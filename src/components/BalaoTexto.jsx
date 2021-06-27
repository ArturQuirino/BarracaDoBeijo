import React from 'react';
import {statusJacare} from '../constantes';
import './BalaoTexto.css';

const BalaoTexto = ({status}) => {

  const obterTextoBala = () => {
    switch(status) {
      case statusJacare.inicial:
        return 'Oi, meu nome é Jaque. Bora da um beijin?';
      case statusJacare.bom:
        return 'Casa comigo!'
      case statusJacare.medio:
        return 'Hmm... Ok, mas não dos melhores'
      case statusJacare.ruim:
        return 'Véi do céu, quer uma pastilha?'
      default:
        return '';
    }
  }

  return ( <div className="balao-texto">{obterTextoBala()}</div> );
}
 
export default BalaoTexto;