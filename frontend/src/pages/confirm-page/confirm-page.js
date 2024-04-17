import React from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

import Button from '../../components/button/button';
import './confirm-page.css';

function ConfirmPage() {

  const location = useLocation();
  const assento = new URLSearchParams(location.search).get('id');

  function createReserva(event) {
    axios.post(`http://127.0.0.1:8000/reserva/create/`, {id: assento, number: assento})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='confirm'>
      <h1>Confirme sua Reserva</h1>

      <div className='row'>
        <p>Assento: {assento}</p>

        <Button
          className="grad medium"
          text="Confirmar"
          onClick={createReserva}
          to="/"
        />
      </div>
    </div>
  );
}

export default ConfirmPage;
