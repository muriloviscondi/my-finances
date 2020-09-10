import React from 'react';

import style from './style.module.css';

export default function Cards() {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-content center">
          <p className={`center ${style.titleCash}`}>R$ 1000,00</p>
          <p>Receitas</p>
        </div>
      </div>
    </div>
  );
}
