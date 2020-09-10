import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import style from './style.module.css';

export default function TbodyRevenue() {
  const [financials, setFinancials] = useState([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setFinancials(response.data);
    });
  });

  const revenues = [];

  financials.forEach((financial) => {
    if (financial.type.toLowerCase() === 'revenue') {
      revenues.push(financial);
    }
  });

  async function handleDeleteRevenue(id) {
    try {
      await api.delete(`/delete/${id}`);

      setFinancials(financials.filter((financial) => financial.id !== id));
    } catch (err) {
      alert('Erro ao deletar receita, tente novamente.');
    }
  }

  return (
    <>
      {revenues.map((revenue) => (
        <tr key={revenue.id}>
          <td>{revenue.id}</td>
          <td>{revenue.data}</td>
          <td>{revenue.name}</td>
          <td>{revenue.description}</td>
          <td>
            R${' '}
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(revenue.value)}
          </td>
          <td>
            <Link to={`/update/${revenue.id}`}>
              <FiEdit2 />
            </Link>
          </td>
          <td>
            <a onClick={() => handleDeleteRevenue(revenue.id)}>
              <FiTrash2 className={style.editIcon} />
            </a>
          </td>
        </tr>
      ))}
    </>
  );
}
