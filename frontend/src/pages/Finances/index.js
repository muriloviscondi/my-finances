import React from 'react';

import Cards from '../../componentes/Cards/Cards';

export default function Financy() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4">
          <Cards />
        </div>
        <div className="col s12 m4">
          <Cards />
        </div>
        <div className="col s12 m4">
          <Cards />
        </div>
      </div>

      <hr />
    </div>
  );
}
