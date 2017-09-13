import React from 'react';
import ProductListContainer from '../containers/productList';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Product</h2>
        <ProductListContainer />
    </div>
);

export default App;
