import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FiSkipBack, FiAirplay } from 'react-icons/fi';

import style from './style.module.css';

import api from '../../services/api';

export default function Edit() {
  const [financials, setFinancials] = useState([]);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/update/${id}`).then((response) => {
      setFinancials(response.data);
      console.log(id);
    });
  });

  async function handleNewFinance(e) {
    e.preventDefault();

    const data = {
      name,
      type,
      description,
      value,
      date,
    };

    try {
      await api.post('create', data);

      alert('Finança criado com sucesso.');

      history.push('/');
    } catch {
      alert('Erro ao cadastrar usuário. Tente novamente.');
    }
  }

  return (
    <div className="container topSpace">
      <div className="row">
        <form className="col s12 center" onSubmit={handleNewFinance}>
          <div className="row">
            <div className="input-field col s12 m3">
              <input
                id="date"
                type="date"
                value={financials.date}
                onChange={(e) => setDate(e.target.date)}
                className="validate"
              />
              <label htmlFor="date">Data</label>
            </div>
            <div className="input-field col s12 m9">
              <input
                id="name"
                type="text"
                value={financials.name}
                onChange={(e) => setName(e.target.value)}
                className="validate"
              />
              <label htmlFor="name">Nome do Recebimento/Pagamento</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                id="description"
                type="text"
                value={financials.description}
                onChange={(e) => setDescription(e.target.description)}
                className="validate"
              />
              <label htmlFor="description">Descrição</label>
            </div>

            <div className="input-field col s12 m3">
              <select
                className={`browser-default ${style.selectInput}`}
                id="type"
                name="type"
                defaultValue={'default'}
                onChange={(e) => setType(e.target.type)}
              >
                <option value="default" disabled selected>
                  Choose your option
                </option>
                <option value="revenue">Receitas/Recebimentos</option>
                <option value="expense">Despesas/Pagamentos</option>
              </select>
            </div>
            <div className="input-field col s12 m3">
              <input
                id="value"
                type="number"
                value={financials.value}
                onChange={(e) => setValue(e.target.value)}
                className="validate"
              />
              <label htmlFor="value">Valor</label>
            </div>
          </div>
          <div className="row center">
            <Link
              style={{ marginRight: '25px' }}
              to="/"
              className="btn-floating btn-medium red"
              title="voltar"
            >
              <i className="material-icons">
                <FiSkipBack />
              </i>
            </Link>
            <button
              className="btn-floating btn-medium green"
              type="submit"
              title="salvar"
            >
              <i className="material-icons">
                <FiAirplay />
              </i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
