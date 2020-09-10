import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import style from './style.module.css';

export default function TbodyExpense() {
  return (
    <tr>
      <td>1</td>
      <td>05/06/2020</td>
      <td>Salário</td>
      <td>Recebimento de Salário</td>
      <td>R$ 2.000,00</td>
      <td>
        <a href="/update/">
          <FiEdit2 />
        </a>
      </td>
      <td>
        <a>
          <FiTrash2 className={style.editIcon} />
        </a>
      </td>
    </tr>
  );
}
