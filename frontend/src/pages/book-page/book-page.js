import React, { useState, useEffect } from "react";
import axios from 'axios';

import Seat from '../../components/seat/seat';
import './book-page.css';

function BookPage() {
  const [ reservas, setReservas ] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/reserva/list/`)
    .then(response => {
      var res = response.data.map((item) => item.number);
      setReservas(res);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  
  return (
    <div className='grid'>
      <h1 className='title'>Escolha seu assento</h1>

      <div className='row'>
        {
          [...Array(10).keys()].map((i) => {
            console.log(reservas.includes(i));
            if (reservas.includes(i)) return <Seat className="taken"/>
            else return <Seat className="free" to={`/confirm?id=${i}`} />
          })
        }
      </div>

      <div className='row'>
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
      </div>

      <div className='row campo'>
        <div className='col'>
          <div className='row'>
            <Seat />
            <Seat />
            <Seat />
          </div>
          <div className='row'>
            <Seat />
            <Seat />
            <Seat />
          </div>
        </div>
        
        <h1>Campo</h1>

        <div className='col'>
          <div className='row'>
            <Seat />
            <Seat />
            <Seat />
          </div>
          <div className='row'>
            <Seat />
            <Seat />
            <Seat />
          </div>
        </div>
      </div>

      <div className='row'>
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
      </div>

      <div className='row'>
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
      </div>
    </div>
  );
}

export default BookPage;
