import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from './redux/slices/productSlice';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import OrderNow from './pages/OrderNow';
import EmptyCart from './pages/EmptyCart';

function App(){
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAllProducts());
  },[]);

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:productId' element={<Details />} />
      <Route path='ordernow' element={<OrderNow />}/>
      <Route path='emptyCart' element={<EmptyCart />}/>
      <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
