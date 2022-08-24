import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ProductCard } from './components/product-card/product-card';
// import { MainPage } from './pages/main-page/main-page';
import './style.css';
import { productDescription } from './utils/mock';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <MainPage/> */}
      <ProductCard productDescription={productDescription}/>
    </Provider>
  </React.StrictMode>,
);
