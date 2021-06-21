import React, { useRef, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import JacareComponent from '../components/JacareComponent';
import './BarracaDoBeijoPage.css';
import { statusJacare } from '../constantes';
import Botao from '../components/Botao';

const BarracaDoBeijoPage = () => {
  const [statusBeijo, setStatusBeijo] = useState(statusJacare.inicial);
  const [percentualBeijo, setPercentualBeijo] = useState(0);
  const [aumentoPercentualBeijo, setAumentoPercentualBeijo] = useState(true);
  const [timer, setTimer] = useState();

  const percentualBeijoRef = useRef(percentualBeijo);
  percentualBeijoRef.current = percentualBeijo;

  const aumentoPercentualBeijoRef = useRef(aumentoPercentualBeijo);
  aumentoPercentualBeijoRef.current = aumentoPercentualBeijo;

  const iniciarBeijo = () => {
    setStatusBeijo(statusJacare.durante);
    setTimer(
      setInterval(() => {
        if (percentualBeijoRef.current >= 1) {
          setAumentoPercentualBeijo(false);
        }

        if (percentualBeijoRef.current <= 0) {
          setAumentoPercentualBeijo(true);
        }

        if (aumentoPercentualBeijoRef.current) {
          setPercentualBeijo(percentualBeijoRef.current + 0.01);
        } else {
          setPercentualBeijo(percentualBeijoRef.current - 0.01);
        }
      }, 10)
    );
  };

  const beijar = () => {
    clearInterval(timer);
    console.log('Beijo: ' + percentualBeijo);
    if (percentualBeijo > 0.8) setStatusBeijo(statusJacare.bom);
    else if (percentualBeijo > 0.6) setStatusBeijo(statusJacare.medio);
    else setStatusBeijo(statusJacare.ruim);
  };

  const reiniciarBeijo = () => {
    setPercentualBeijo(0);
    iniciarBeijo();
  };

  return (
    <main className="main-barraca-beijo">
      <JacareComponent status={statusBeijo} />
      <div className="gauge-container">
        <GaugeChart
          id="gauge-chart"
          nrOfLevels={20}
          percent={percentualBeijo}
          colors={['#a83432', '#31d92b']}
          hideText={true}
        ></GaugeChart>
      </div>
      <div className="interacao-container">
        {statusBeijo === statusJacare.inicial && (
          <Botao onClick={iniciarBeijo} status={statusBeijo} />
        )}
        {statusBeijo === statusJacare.durante && (
          <Botao onClick={beijar} status={statusBeijo} />
        )}
        {(statusBeijo === statusJacare.bom ||
          statusBeijo === statusJacare.medio ||
          statusBeijo === statusJacare.ruim) && (
          <Botao onClick={reiniciarBeijo} status={statusBeijo} />
        )}
      </div>
    </main>
  );
};

export default BarracaDoBeijoPage;