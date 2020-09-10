import React, { Component } from 'react';
import { FiSend } from 'react-icons/fi';
import M from 'materialize-css';

import style from './style.module.css';

export default class Create extends Component {
  constructor() {
    super();

    M.updateTextFields();

    const elemsSelect = document.querySelectorAll('.select');
    M.FormSelect.init(elemsSelect);
  }
  render() {
    return (
      <div className={style.topSpace}>
        <div className="row container">
          <form className="col s12 center" action="/" method="POST">
            <div className="row">
              <div className="input-field col s6 m2">
                <input id="date" type="date" className="validate" />
                <label for="date">Data</label>
              </div>
              <div className="input-field col s6 m4">
                <input id="name" type="text" className="validate" />
                <label for="name">Nome do Recebimento/Pagamento</label>
              </div>
              <div className="input-field col s6 m4">
                <input id="description" type="text" className="validate" />
                <label for="description">Descrição</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s6 m4">
                <select>
                  <option value="" disabled selected>
                    Escolha uma opção
                  </option>
                  <option value="revenue">Receitas/Recebimentos</option>
                  <option value="expense">Despesas/Pagamentos</option>
                </select>
                <label>Materialize Select</label>
              </div>
              <div className="input-field col s6 m4">
                <input
                  id="value"
                  type="number"
                  min="0"
                  step="0.01"
                  className="validate"
                />
                <label for="value">Valor</label>
              </div>
              <div className="input-field col s6 m3">
                <button
                  class="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                  <i class="material-icons right">
                    <FiSend />
                  </i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
