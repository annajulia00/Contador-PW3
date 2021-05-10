import './App.css';

import React from 'react';

import Contador from './components/Contador'
import Card from './components/layout/Card';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (

      <div className="App">
          <h1> Contador </h1>

          <div className="Cards" >

              <Card titulo="Contadorzinho componentizado - Lucas Seles" color="#0d3024">
                  <Contador numeroInicial={10} />
              </Card>

          </div>
      </div>
);