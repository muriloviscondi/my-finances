import React from 'react';

import Cards from '../../componentes/Cards/Cards';
import Thead from '../../componentes/Table/Thead';
import TbodyRevenue from '../../componentes/Table/TbodyRevenue';
import TbodyExpense from '../../componentes/Table/TbodyExpense';

import style from './style.module.css';

export default function Financy() {
  return (
    <div className="container">
      <div className="row">
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className={style.titleTable}>
        <h2>Receitas / Entrada</h2>
      </div>

      <table className="centered">
        <Thead />
        <tbody>
          <TbodyRevenue />
        </tbody>
      </table>

      <div className={style.titleTable}>
        <h2>Despesas / Saida</h2>
      </div>
      <table className="centered">
        <Thead />
        <tbody>
          <TbodyExpense />
        </tbody>
      </table>
    </div>
  );
}
