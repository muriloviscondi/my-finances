import React, { useState, useEffect } from 'react';
import { handleResults } from '../../helpers/cards';

import api from '../../services/api';

import style from './style.module.css';

export default function CardResult() {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setFinancials(response.data);
    });
  });
  return (
    <div className="col s12 m4">
      <div className="card deep-orange darken-1">
        <div className="card-content center">
          <p className={`center ${style.titleCash}`}>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(handleResults(financials))}
          </p>
          <p>Resultado</p>
        </div>
      </div>
    </div>
  );
}
