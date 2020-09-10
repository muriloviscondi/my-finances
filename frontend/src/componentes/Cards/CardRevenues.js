import React, { useState, useEffect } from 'react';
import { handleTotalRevenues } from '../../helpers/cards';

import api from '../../services/api';

import style from './style.module.css';

export default function CardRevenues() {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setFinancials(response.data);
    });
  });
  return (
    <div className="col s12 m4">
      <div className="card teal lighten-1 ">
        <div className="card-content center">
          <p className={`center ${style.titleCash}`}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(handleTotalRevenues(financials))}
          </p>
          <p>Receitas</p>
        </div>
      </div>
    </div>
  );
}
