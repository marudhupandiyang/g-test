import React from 'react';
import ProductListContainer from '../containers/productList';
import Cart from '../containers/cart';
require('../../scss/style.scss');

const App = () => (
    <div>
        <div className="col-md-12">
          <div className="col-md-9">
            <ProductListContainer />
          </div>
          <div className="col-md-3">
            <Cart />
          </div>
      </div>
    </div>
);

export default App;
