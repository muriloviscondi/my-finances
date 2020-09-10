import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import CardRevenues from '../../componentes/Cards/CardRevenues';
import CardExpenses from '../../componentes/Cards/CardExpenses';
import CardResults from '../../componentes/Cards/CardResults';
import Thead from '../../componentes/Table/Thead';
import TbodyRevenue from '../../componentes/Table/TbodyRevenue';
import TbodyExpense from '../../componentes/Table/TbodyExpense';

import style from './style.module.css';

export default function Financy() {
  return (
    <div className="topSpace">
      <div className="container">
        <div className="row">
          <CardRevenues />
          <CardExpenses />
          <CardResults />
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

        <div className="fixed-action-btn">
          <Link
            to="/create/"
            className="btn-floating btn-medium waves-effect waves-light teal darken-4 right fixed"
            title="Adicionar"
          >
            <i className="material-icons">
              <FiPlus style={{ fontSize: '20px' }} />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
}
