import React from 'react';

import style from './style.module.css';

export default function Cards() {
  return (
    <div className="card cyan darken-4">
      <div className="card-content center">
        <p className={`center ${style.titleCash}`}>Value</p>
        <p>Receitas</p>
      </div>
    </div>
  );
}
