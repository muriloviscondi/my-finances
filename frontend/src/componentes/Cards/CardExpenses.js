import React, { useState, useEffect } from 'react';
import { handleTotalExpenses } from '../../helpers/cards';

import api from '../../services/api';

import style from './style.module.css';

export default function CardExpenses() {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setFinancials(response.data);
    });
  });
  return (
    <div className="col s12 m4">
      <div className="card red lighten-1">
        <div className="card-content center">
          <p className={`center ${style.titleCash}`}>
            -
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(handleTotalExpenses(financials))}
          </p>
          <p>Despesas</p>
        </div>
      </div>
    </div>
  );
}
