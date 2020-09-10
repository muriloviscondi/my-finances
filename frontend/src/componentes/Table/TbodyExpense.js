import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import style from './style.module.css';

export default function TbodyExpense() {
  const [financials, setFinancials] = useState([]);

  const expenses = [];

  useEffect(() => {
    api.get('/').then((response) => {
      setFinancials(response.data);
    });
  });

  financials.forEach((financial) => {
    if (financial.type.toLowerCase() === 'expense') {
      expenses.push(financial);
    }
  });

  async function handleDeleteExpense(id) {
    try {
      await api.delete(`/delete/${id}`);

      setFinancials(financials.filter((financial) => financial.id !== id));
    } catch (err) {
      alert('Erro ao deletar despesa, tente novamente.');
    }
  }

  return (
    <>
      {expenses.map((expense) => (
        <tr key={expense.id}>
          <td>{expense.id}</td>
          <td>{expense.data}</td>
          <td>{expense.name}</td>
          <td>{expense.description}</td>
          <td>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(expense.value)}
          </td>
          <td>
            <Link to={`/update/${expense.id}`}>
              <FiEdit2 />
            </Link>
          </td>
          <td>
            <Link onClick={() => handleDeleteExpense(expense.id)}>
              <FiTrash2 className={style.editIcon} />
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
}
